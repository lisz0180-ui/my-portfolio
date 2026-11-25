const dateFormatter = new Intl.DateTimeFormat('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

/**
 * 작성자 정보를 "홍OO / 부산 / 23세" 형태로 만든다. (값이 없는 항목은 생략)
 * @param {{ masked_name: string, region: string|null, age: number|null }} entry
 * @returns {string}
 */
export function formatAuthorInfo({ masked_name: maskedName, region, age }) {
  return [maskedName, region, age ? `${age}세` : null].filter(Boolean).join(' / ');
}

/**
 * ISO 날짜 문자열을 한국어 날짜/시간으로 변환한다.
 * @param {string} isoString
 * @returns {string}
 */
export function formatDateTime(isoString) {
  return dateFormatter.format(new Date(isoString));
}
