import Container from '@mui/material/Container';
import { SectionCard } from '../components/ui';

/**
 * Projects 페이지
 *
 * Example usage:
 * <Route path="/projects" element={<ProjectsPage />} />
 */
export default function ProjectsPage() {
  return (
    <Container
      maxWidth="md"
      sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 4 }, display: 'flex', alignItems: 'center' }}
    >
      <SectionCard title="Projects">
        Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
      </SectionCard>
    </Container>
  );
}
