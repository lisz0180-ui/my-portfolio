/**
 * Contact 섹션 전용 색상 변수.
 * 포트폴리오 공통 테마(index.css 의 --color-* 변수, 다크 모드 포함)를 그대로 참조합니다.
 * 섹션 루트와 Dialog(포털) 의 sx 에 펼쳐서 사용합니다.
 */
export const CONTACT_VARS = {
  '--ct-accent': 'var(--color-primary-dark)',
  '--ct-accent-soft': 'var(--color-primary-light)',
  '--ct-on-accent': '#FFFFFF',
  '--ct-surface': 'var(--color-bg-secondary)',
  '--ct-card': 'var(--color-bg-primary)',
  '--ct-tab-idle': 'var(--color-primary-light)',
  '--ct-line': 'var(--color-border)',
  '--ct-ink': 'var(--color-text-primary)',
  '--ct-sub': 'var(--color-text-secondary)',
  '--ct-error': 'var(--color-accent)',
};

/** TextField 공통 스타일 (테마 색 포커스) */
export const FIELD_SX = {
  '& .MuiOutlinedInput-root': {
    bgcolor: 'var(--ct-card)',
    color: 'var(--ct-ink)',
    '& fieldset': { borderColor: 'var(--color-border-input)' },
    '&:hover fieldset': { borderColor: 'var(--color-primary)' },
    '&.Mui-focused fieldset': { borderColor: 'var(--color-primary)' },
    '&.Mui-error fieldset': { borderColor: 'var(--ct-error)' },
  },
  '& .MuiInputLabel-root': { color: 'var(--ct-sub)' },
  '& .MuiInputLabel-root.Mui-focused': { color: 'var(--ct-accent)' },
  '& .MuiInputLabel-root.Mui-error': { color: 'var(--ct-error)' },
  '& .MuiFormHelperText-root': { color: 'var(--ct-sub)' },
  '& .MuiFormHelperText-root.Mui-error': { color: 'var(--ct-error)' },
};

/** 테마 기본 버튼 스타일 */
export const PRIMARY_BUTTON_SX = {
  minHeight: 44,
  fontWeight: 700,
  boxShadow: 'none',
  bgcolor: 'var(--color-button-primary)',
  color: 'var(--ct-on-accent)',
  '&:hover': { bgcolor: 'var(--color-button-hover)', boxShadow: 'none' },
  '&.Mui-disabled': { opacity: 0.6, color: 'var(--ct-on-accent)', bgcolor: 'var(--color-button-primary)' },
};
