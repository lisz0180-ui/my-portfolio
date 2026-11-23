import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const TABS = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

/**
 * 상단 네비게이션 (Home / About Me / Projects)
 *
 * Example usage:
 * <Header />
 */
export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        bgcolor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
        <Box
          component="nav"
          aria-label="주 메뉴"
          sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 0.5, md: 2 } }}
        >
          {TABS.map(({ label, to }) => (
            <Box
              key={to}
              component={NavLink}
              to={to}
              end
              sx={{
                display: 'flex',
                alignItems: 'center',
                minHeight: 56,
                px: { xs: 1.5, md: 2.5 },
                fontSize: { xs: '0.95rem', md: '1rem' },
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                borderBottom: '3px solid transparent',
                transition: 'color 0.2s, border-color 0.2s',
                '&:hover': { color: 'var(--color-text-primary)' },
                '&.active': {
                  color: 'var(--color-primary-dark)',
                  fontWeight: 700,
                  borderBottomColor: 'var(--color-primary)',
                },
              }}
            >
              {label}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
