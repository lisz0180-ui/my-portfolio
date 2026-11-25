import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { formatAuthorInfo } from '../../utils/format-guestbook';
import { PRIMARY_BUTTON_SX } from './contact-style';

/**
 * 방명록 게시글 목록 (글 좌측 한 줄 생략 / 작성자 정보 우측)
 *
 * Props:
 * @param {array} entries - 방명록 목록 [Required]
 * @param {boolean} isLoading - 로딩 여부 [Required]
 * @param {string} error - 오류 메시지 [Optional, 기본값: '']
 * @param {function} onSelect - 글 선택 시 실행, (id) 전달 [Required]
 * @param {function} onRetry - 다시 불러오기 [Required]
 * @param {function} onGoWrite - 글쓰기 탭으로 이동 [Required]
 *
 * Example usage:
 * <GuestbookList entries={entries} isLoading={false} onSelect={fn} onRetry={fn} onGoWrite={fn} />
 */
export default function GuestbookList({ entries, isLoading, error = '', onSelect, onRetry, onGoWrite }) {
  if (isLoading) {
    return (
      <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress size={28} aria-label="방명록 불러오는 중" sx={{ color: 'var(--ct-blue)' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert
          severity="error"
          action={<Button color="inherit" size="small" onClick={onRetry}>다시 시도</Button>}
        >
          {error}
        </Alert>
      </Box>
    );
  }

  if (entries.length === 0) {
    return (
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          p: 3,
          textAlign: 'center',
          color: 'var(--ct-sub)',
          fontSize: '0.95rem',
        }}
      >
        <Box>아직 남겨진 글이 없어요.<br />첫 번째 방명록을 남겨보세요!</Box>
        <Button variant="contained" onClick={onGoWrite} sx={PRIMARY_BUTTON_SX}>글 남기러 가기</Button>
      </Box>
    );
  }

  return (
    <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', height: '100%', overflowY: 'auto' }}>
      {entries.map((entry) => (
        <Box component="li" key={entry.id} sx={{ borderBottom: '1px solid var(--ct-line)' }}>
          <Box
            component="button"
            type="button"
            onClick={() => onSelect(entry.id)}
            sx={{
              width: '100%',
              minHeight: 52,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              px: 2,
              py: 1.25,
              border: 0,
              bgcolor: 'transparent',
              color: 'var(--ct-ink)',
              font: 'inherit',
              textAlign: 'left',
              cursor: 'pointer',
              transition: 'background-color 0.15s',
              '&:hover': { bgcolor: 'var(--ct-blue-soft)' },
            }}
          >
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                '@supports (text-overflow: "x")': { textOverflow: '"......"' },
              }}
            >
              {entry.message}
            </Box>
            <Box
              sx={{
                flexShrink: 0,
                maxWidth: '45%',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                fontSize: '0.8rem',
                color: 'var(--ct-sub)',
              }}
            >
              {formatAuthorInfo(entry)}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
