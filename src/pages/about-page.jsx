import Container from '@mui/material/Container';
import { SectionCard } from '../components/ui';

/**
 * About Me 페이지
 *
 * Example usage:
 * <Route path="/about" element={<AboutPage />} />
 */
export default function AboutPage() {
  return (
    <Container
      maxWidth="md"
      sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 4 }, display: 'flex', alignItems: 'center' }}
    >
      <SectionCard title="About Me">
        About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
      </SectionCard>
    </Container>
  );
}
