import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const NOT_READY_MESSAGE = '방명록 서버 설정이 필요합니다.';

/** 방명록 목록 조회. 항상 { data, errorMessage } 로 반환한다. */
async function fetchEntries() {
  if (!supabase) return { data: [], errorMessage: NOT_READY_MESSAGE };
  const { data, error } = await supabase.rpc('guestbook_list');
  if (error) {
    return { data: [], errorMessage: '방명록을 불러오지 못했어요. 잠시 후 다시 시도해주세요.' };
  }
  return { data: data ?? [], errorMessage: '' };
}

/**
 * 방명록 데이터 훅 (Supabase RPC 사용)
 * - 목록: guestbook_list (이름 마스킹, 비공개 정보 제외)
 * - 작성: guestbook_create / 삭제: guestbook_delete (비밀번호 검증)
 *
 * Example usage:
 * const { entries, isLoading, error, reload, createEntry, deleteEntry } = useGuestbook();
 */
export default function useGuestbook() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  /** 조회 결과를 상태에 반영한다. */
  const applyResult = useCallback(({ data, errorMessage }) => {
    setError(errorMessage);
    if (!errorMessage) setEntries(data);
    setIsLoading(false);
  }, []);

  const reload = useCallback(async () => {
    setIsLoading(true);
    applyResult(await fetchEntries());
  }, [applyResult]);

  useEffect(() => {
    let isIgnored = false;
    fetchEntries().then((result) => {
      if (!isIgnored) applyResult(result);
    });
    return () => {
      isIgnored = true;
    };
  }, [applyResult]);

  /**
   * 방명록 작성
   * @param {object} values - { name, password, message, email, phone, region, age }
   */
  const createEntry = useCallback(async (values) => {
    if (!supabase) throw new Error(NOT_READY_MESSAGE);
    const { error: rpcError } = await supabase.rpc('guestbook_create', {
      p_name: values.name,
      p_message: values.message,
      p_password: values.password,
      p_email: values.email || null,
      p_phone: values.phone || null,
      p_region: values.region || null,
      p_age: values.age ? Number(values.age) : null,
    });
    if (rpcError) throw new Error(rpcError.message || '등록에 실패했어요.');
    await reload();
  }, [reload]);

  /**
   * 방명록 삭제 (비밀번호 불일치 시 Error)
   * @param {number} id - 방명록 ID
   * @param {string} password - 작성 시 입력한 비밀번호
   */
  const deleteEntry = useCallback(async (id, password) => {
    if (!supabase) throw new Error(NOT_READY_MESSAGE);
    const { data, error: rpcError } = await supabase.rpc('guestbook_delete', {
      p_id: id,
      p_password: password,
    });
    if (rpcError) throw new Error('삭제 중 오류가 발생했어요.');
    if (!data) throw new Error('비밀번호가 일치하지 않습니다.');
    await reload();
  }, [reload]);

  return { entries, isLoading, error, reload, createEntry, deleteEntry };
}
