import { keyframes } from '@emotion/react';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { formatAuthorInfo, formatDateTime } from '../../utils/format-guestbook';

const flipIn = keyframes`
  from { opacity: 0; transform: perspective(900px) rotateY(-14deg) scale(0.97); }
  to { opacity: 1; transform: perspective(900px) rotateY(0) scale(1); }
`;

/**
 * 방명록 글 전체 보기 카드 (카드를 누르면 목록으로 복원)
 *
 * Props:
 * @param {object} entry - 방명록 글 [Required]
 * @param {function} onClose - 목록으로 돌아가기 [Required]
 * @param {function} onRequestDelete - 삭제하기 버튼 클릭 [Required]
 *
 * Example usage:
 * <GuestbookDetail entry={entry} onClose={fn} onRequestDelete={fn} />
 */
export default function GuestbookDetail({ entry, onClose, onRequestDelete }) {
  /** 텍스트를 드래그 선택 중이면 카드가 닫히지 않도록 한다. */
  const handleCardClick = () => {
    if (window.getSelection()?.toString()) return;
    onClose();
  };

  /** 스크롤바를 누르는 동작은 카드 클릭으로 취급하지 않는다. */
  const handleMessageClick = (event) => {
    const { currentTarget, nativeEvent } = event;
    if (nativeEvent.offsetX > currentTarget.clientWidth) event.stopPropagation();
  };

  return (
    <Box
      onClick={handleCardClick}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        p: 2.5,
        bgcolor: 'var(--ct-card)',
        border: '1px solid var(--ct-line)',
        borderRadius: 2,
        cursor: 'pointer',
        animation: `${flipIn} 0.28s ease-out`,
        '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 1, flexWrap: 'wrap' }}>
        <Box sx={{ fontWeight: 700, color: 'var(--ct-accent)' }}>{formatAuthorInfo(entry)}</Box>
        <Box sx={{ fontSize: '0.8rem', color: 'var(--ct-sub)' }}>{formatDateTime(entry.created_at)}</Box>
      </Box>

      <Box
        onClick={handleMessageClick}
        sx={{
          flex: 1,
          minHeight: 0,
          overflowY: 'auto',
          whiteSpace: 'pre-wrap',
          overflowWrap: 'anywhere',
          lineHeight: 1.7,
          color: 'var(--ct-ink)',
        }}
      >
        {entry.message}
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
        <Box sx={{ fontSize: '0.78rem', color: 'var(--ct-sub)' }}>카드를 누르면 목록으로 돌아가요</Box>
        <Button
          variant="outlined"
          size="small"
          startIcon={<DeleteOutlined />}
          onClick={(event) => {
            event.stopPropagation();
            onRequestDelete();
          }}
          sx={{
            minHeight: 40,
            flexShrink: 0,
            color: 'var(--ct-error)',
            borderColor: 'var(--ct-error)',
            '&:hover': { borderColor: 'var(--ct-error)', bgcolor: 'transparent', opacity: 0.85 },
          }}
        >
          삭제하기
        </Button>
      </Box>
    </Box>
  );
}
