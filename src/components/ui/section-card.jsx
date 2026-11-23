import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/**
 * 섹션 구분용 카드 컴포넌트
 *
 * Props:
 * @param {string} id - 섹션 id [Optional]
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} label - 제목 위 작은 라벨 [Optional]
 * @param {boolean} isDark - 어두운 배경 사용 여부 [Optional, 기본값: false]
 * @param {boolean} isSoft - 보조 배경 사용 여부 [Optional, 기본값: false]
 * @param {node} children - 섹션 본문 [Required]
 *
 * Example usage:
 * <SectionCard title="Hero" label="01">설명</SectionCard>
 */
export default function SectionCard({ id, title, label, isDark = false, isSoft = false, children }) {
  let bgcolor = 'var(--color-bg-primary)';
  if (isSoft) bgcolor = 'var(--color-bg-secondary)';
  if (isDark) bgcolor = 'var(--color-bg-dark)';

  return (
    <Card
      id={id}
      component="section"
      elevation={0}
      sx={{
        width: '100%',
        bgcolor,
        color: isDark ? '#FFFFFF' : 'var(--color-text-primary)',
        border: '1px solid',
        borderColor: isDark ? 'transparent' : 'var(--color-border)',
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 5 }, textAlign: 'center' }}>
        {label && (
          <Box
            sx={{
              display: 'inline-block',
              mb: 1.5,
              px: 1.5,
              py: 0.5,
              borderRadius: 10,
              fontSize: '0.8rem',
              fontWeight: 700,
              bgcolor: 'var(--color-primary-light)',
              color: 'var(--color-primary-dark)',
            }}
          >
            {label}
          </Box>
        )}
        <Box
          component="h2"
          sx={{ m: 0, mb: 1.5, fontSize: { xs: '1.5rem', md: '2rem' }, lineHeight: 1.3 }}
        >
          {title}
        </Box>
        <Box
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6,
            color: isDark ? 'rgba(255,255,255,0.8)' : 'var(--color-text-secondary)',
          }}
        >
          {children}
        </Box>
      </CardContent>
    </Card>
  );
}
