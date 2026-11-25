import Box from '@mui/material/Box';
import { CONTACT_ITEMS, SNS_ITEMS } from './contact-data';
import ContactRow from './contact-row';

/**
 * 연락처 카드 (CONTACT 타이틀 + 영어 표어/한글 문장 + 연락처 + SNS)
 *
 * Example usage:
 * <ContactInfoCard />
 */
export default function ContactInfoCard() {
  return (
    <Box
      component="article"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        p: { xs: 3, md: 3.5 },
        bgcolor: 'var(--ct-card)',
        border: '1px solid var(--ct-line)',
        borderRadius: 3,
      }}
    >
      <Box>
        <Box
          component="h2"
          sx={{ m: 0, mb: 1.5, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.28em', color: 'var(--ct-accent)' }}
        >
          CONTACT
        </Box>
        <Box
          sx={{
            fontSize: { xs: '1.9rem', md: '1.85rem' },
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: 'var(--ct-ink)',
          }}
        >
          Let&apos;s make
          <br />
          something good.
        </Box>
        <Box sx={{ mt: 1.5, fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ct-sub)' }}>
          함께 만들고 싶은 아이디어가 있다면 편하게 연락 주세요. 가벼운 안부 인사도 언제나 반갑습니다.
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {CONTACT_ITEMS.map(({ key, ...item }) => (
          <ContactRow key={key} { ...item } />
        ))}
      </Box>

      <Box sx={{ height: '1px', bgcolor: 'var(--ct-line)' }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {SNS_ITEMS.map(({ key, ...item }) => (
          <ContactRow key={key} { ...item } />
        ))}
      </Box>
    </Box>
  );
}
