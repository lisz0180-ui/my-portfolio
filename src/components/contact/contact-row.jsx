import Box from '@mui/material/Box';

/**
 * 아이콘 + 텍스트 한 줄 (연락처/SNS 공용)
 *
 * Props:
 * @param {elementType} icon - MUI 아이콘 컴포넌트 [Required]
 * @param {string} value - 표시할 텍스트 [Required]
 * @param {string} label - 값 위에 표시할 작은 라벨 [Optional]
 * @param {string} href - 링크 주소 (없으면 일반 텍스트) [Optional]
 *
 * Example usage:
 * <ContactRow icon={EmailOutlined} label="Email" value="a@b.com" href="mailto:a@b.com" />
 */
export default function ContactRow({ icon: Icon, value, label, href }) {
  const isExternal = href?.startsWith('http');

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minHeight: 44 }}>
      <Box
        aria-hidden="true"
        sx={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 36,
          height: 36,
          borderRadius: '50%',
          bgcolor: 'var(--ct-accent-soft)',
          color: 'var(--ct-accent)',
        }}
      >
        <Icon sx={{ fontSize: 20 }} />
      </Box>
      <Box sx={{ minWidth: 0 }}>
        {label && (
          <Box sx={{ fontSize: '0.75rem', lineHeight: 1.3, color: 'var(--ct-sub)' }}>{label}</Box>
        )}
        <Box
          component={href ? 'a' : 'span'}
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          sx={{
            display: 'block',
            fontSize: '0.95rem',
            lineHeight: 1.5,
            color: 'var(--ct-ink)',
            textDecoration: 'none',
            overflowWrap: 'anywhere',
            ...(href && { '&:hover': { color: 'var(--ct-accent)', textDecoration: 'underline' } }),
          }}
        >
          {value}
        </Box>
      </Box>
    </Box>
  );
}
