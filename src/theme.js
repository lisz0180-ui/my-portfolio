import { createTheme } from '@mui/material/styles';

/**
 * MUI 테마. 색상 값은 index.css 의 CSS 변수(컬러 팔레트 디자인 시스템)의 라이트 모드 값과 동일합니다.
 * 다크 모드 전환이 필요한 색상은 컴포넌트 sx 에서 var(--color-*) 를 직접 사용합니다.
 */
const theme = createTheme({
  palette: {
    primary: { main: '#03C75A', light: '#DDF5E7', dark: '#02A74C', contrastText: '#FFFFFF' },
    secondary: { main: '#12C45B' },
    error: { main: '#E8383D' },
    info: { main: '#1A8CFF' },
    text: { primary: '#1E1E23', secondary: '#666666' },
  },
  typography: {
    fontFamily: '"Roboto", "Noto Sans KR", "Helvetica", "Arial", sans-serif',
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: { root: { textTransform: 'none', minHeight: 44 } },
    },
  },
});

export default theme;
