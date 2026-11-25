import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ContactSection } from '../components/contact';
import { SectionCard } from '../components/ui';

const SECTIONS = [
  {
    id: 'hero',
    title: 'Hero',
    label: '01',
    isDark: true,
    text: '여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.',
  },
  {
    id: 'about',
    title: 'About Me',
    label: '02',
    text: '여기는 About Me 섹션입니다. 간단한 자기소개와 \'더 알아보기\' 버튼이 들어갈 예정입니다.',
  },
  {
    id: 'skill-tree',
    title: 'Skill Tree',
    label: '03',
    isSoft: true,
    text: '여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.',
  },
  {
    id: 'projects',
    title: 'Projects',
    label: '04',
    text: '여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 \'더 보기\' 버튼이 들어갈 예정입니다.',
  },
];

/**
 * Home 페이지 (5개 섹션)
 *
 * Example usage:
 * <Route path="/" element={<HomePage />} />
 */
export default function HomePage() {
  return (
    <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 4 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
        {SECTIONS.map(({ id, text, ...rest }) => (
          <SectionCard key={id} id={id} {...rest}>
            {text}
          </SectionCard>
        ))}
        <ContactSection />
      </Box>
    </Container>
  );
}
