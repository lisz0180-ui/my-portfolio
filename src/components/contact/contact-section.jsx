import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ContactInfoCard from './contact-info-card';
import { CONTACT_VARS } from './contact-style';
import GuestbookCard from './guestbook-card';

/**
 * Home 페이지의 Contact 섹션 (연락처 좌 / 방명록 우, 좁은 화면에서는 위·아래)
 *
 * Example usage:
 * <ContactSection />
 */
export default function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        ...CONTACT_VARS,
        width: '100%',
        p: { xs: 2, md: 3 },
        bgcolor: 'var(--ct-surface)',
        color: 'var(--ct-ink)',
        border: '1px solid var(--ct-line)',
        borderRadius: 2,
        '& :focus-visible': { outline: '2px solid var(--ct-accent)', outlineOffset: 2 },
      }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <ContactInfoCard />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <GuestbookCard />
        </Grid>
      </Grid>
    </Box>
  );
}
