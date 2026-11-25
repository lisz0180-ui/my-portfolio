import Box from '@mui/material/Box';

/**
 * 방명록 게시판 하단 장식 띠 (테마 컬러 기반 추상 이미지)
 * 색상은 index.css 의 --color-* 변수를 따르므로 다크 모드에서도 자동 전환됩니다.
 *
 * Example usage:
 * <GuestbookStripArt />
 */
export default function GuestbookStripArt() {
  return (
    <Box
      aria-hidden="true"
      sx={{ flexShrink: 0, height: 64, lineHeight: 0, borderTop: '1px solid var(--ct-line)', overflow: 'hidden' }}
    >
      <svg
        width="100%"
        height="64"
        viewBox="0 0 600 64"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="600" height="64" style={{ fill: 'var(--color-primary-light)' }} />
        <path
          d="M0 50 C100 30 200 70 320 48 S520 30 600 46 V64 H0 Z"
          style={{ fill: 'var(--color-primary)', opacity: 0.22 }}
        />
        <circle cx="70" cy="74" r="52" style={{ fill: 'var(--color-primary)', opacity: 0.9 }} />
        <circle cx="142" cy="62" r="26" style={{ fill: 'var(--color-secondary)', opacity: 0.55 }} />
        <circle
          cx="236"
          cy="18"
          r="34"
          style={{ fill: 'none', stroke: 'var(--color-primary-dark)', strokeWidth: 2, opacity: 0.35 }}
        />
        <circle cx="330" cy="40" r="6" style={{ fill: 'var(--color-primary-dark)', opacity: 0.5 }} />
        <circle cx="380" cy="22" r="3" style={{ fill: 'var(--color-primary)', opacity: 0.6 }} />
        <circle cx="520" cy="66" r="22" style={{ fill: 'var(--color-primary-dark)', opacity: 0.5 }} />
        <circle cx="568" cy="70" r="58" style={{ fill: 'var(--color-secondary)', opacity: 0.6 }} />
      </svg>
    </Box>
  );
}
