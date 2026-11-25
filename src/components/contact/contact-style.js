/**
 * Contact 섹션 전용 색상 변수 (파란색 + 흰색 계열).
 * 섹션 루트와 Dialog(포털) 의 sx 에 펼쳐서 사용합니다.
 */
export const CONTACT_VARS = {
  '--ct-blue': '#1A73E8',
  '--ct-blue-dark': '#1557B0',
  '--ct-on-blue': '#FFFFFF',
  '--ct-blue-soft': '#EAF3FE',
  '--ct-surface': '#F4F8FD',
  '--ct-card': '#FFFFFF',
  '--ct-tab-idle': '#E1ECFA',
  '--ct-line': '#D3E2F6',
  '--ct-ink': '#16243A',
  '--ct-sub': '#5B6B82',
  '--ct-error': '#D93025',
  '@media (prefers-color-scheme: dark)': {
    '--ct-blue': '#6AB0FF',
    '--ct-blue-dark': '#9CC9FF',
    '--ct-on-blue': '#0B1626',
    '--ct-blue-soft': '#17283F',
    '--ct-surface': '#0E1520',
    '--ct-card': '#151F2E',
    '--ct-tab-idle': '#1B2A40',
    '--ct-line': '#27405E',
    '--ct-ink': '#EAF1FB',
    '--ct-sub': '#9FB2CC',
    '--ct-error': '#F28B82',
  },
};

/** TextField 공통 스타일 (파란색 포커스) */
export const FIELD_SX = {
  '& .MuiOutlinedInput-root': {
    bgcolor: 'var(--ct-card)',
    color: 'var(--ct-ink)',
    '& fieldset': { borderColor: 'var(--ct-line)' },
    '&:hover fieldset': { borderColor: 'var(--ct-blue)' },
    '&.Mui-focused fieldset': { borderColor: 'var(--ct-blue)' },
    '&.Mui-error fieldset': { borderColor: 'var(--ct-error)' },
  },
  '& .MuiInputLabel-root': { color: 'var(--ct-sub)' },
  '& .MuiInputLabel-root.Mui-focused': { color: 'var(--ct-blue)' },
  '& .MuiInputLabel-root.Mui-error': { color: 'var(--ct-error)' },
  '& .MuiFormHelperText-root': { color: 'var(--ct-sub)' },
  '& .MuiFormHelperText-root.Mui-error': { color: 'var(--ct-error)' },
};

/** 파란색 기본 버튼 스타일 */
export const PRIMARY_BUTTON_SX = {
  minHeight: 44,
  fontWeight: 700,
  boxShadow: 'none',
  bgcolor: 'var(--ct-blue)',
  color: 'var(--ct-on-blue)',
  '&:hover': { bgcolor: 'var(--ct-blue-dark)', boxShadow: 'none' },
  '&.Mui-disabled': { opacity: 0.6, color: 'var(--ct-on-blue)', bgcolor: 'var(--ct-blue)' },
};
