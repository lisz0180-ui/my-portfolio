import Box from '@mui/material/Box';

/**
 * 방명록 글 전체 보기 카드의 배경 장식 (우하단 기준 추상 이미지)
 * 부모는 position: relative; overflow: hidden 이어야 하며, 본문은 이 위에 position: relative 로 올린다.
 *
 * Example usage:
 * <GuestbookBackdropArt />
 */
export default function GuestbookBackdropArt() {
  return (
    <Box
      aria-hidden="true"
      sx={{ position: 'absolute', inset: 0, lineHeight: 0, pointerEvents: 'none' }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMaxYMax slice"
        focusable="false"
      >
        <circle cx="380" cy="300" r="180" style={{ fill: 'var(--color-primary-light)' }} />
        <circle cx="380" cy="300" r="118" style={{ fill: 'var(--color-primary)', opacity: 0.16 }} />
        <circle cx="380" cy="300" r="56" style={{ fill: 'var(--color-primary)', opacity: 0.28 }} />
        <circle cx="250" cy="262" r="22" style={{ fill: 'var(--color-secondary)', opacity: 0.45 }} />
        <circle
          cx="40"
          cy="30"
          r="74"
          style={{ fill: 'none', stroke: 'var(--color-primary)', strokeWidth: 1.5, opacity: 0.14 }}
        />
        <circle
          cx="40"
          cy="30"
          r="44"
          style={{ fill: 'none', stroke: 'var(--color-primary)', strokeWidth: 1.5, opacity: 0.14 }}
        />
        <path
          d="M120 300 C150 230 210 210 290 214"
          style={{ fill: 'none', stroke: 'var(--color-primary-dark)', strokeWidth: 1.5, opacity: 0.25 }}
        />
        <circle cx="318" cy="58" r="7" style={{ fill: 'var(--color-secondary)', opacity: 0.4 }} />
        <circle cx="348" cy="92" r="3" style={{ fill: 'var(--color-primary)', opacity: 0.4 }} />
      </svg>
    </Box>
  );
}
