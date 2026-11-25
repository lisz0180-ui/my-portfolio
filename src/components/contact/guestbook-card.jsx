import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import useGuestbook from '../../hooks/use-guestbook';
import GuestbookDeleteDialog from './guestbook-delete-dialog';
import GuestbookDetail from './guestbook-detail';
import GuestbookForm from './guestbook-form';
import GuestbookList from './guestbook-list';

const TABS = [
  { key: 'list', label: '방명록' },
  { key: 'write', label: '글쓰기' },
];

/**
 * 방명록 카드 (상단 책갈피 탭: 방명록 / 글쓰기)
 * - 방명록 탭: 목록 ↔ 글 전체 보기 전환, 삭제(비밀번호 모달)
 * - 글쓰기 탭: 입력 폼
 *
 * Example usage:
 * <GuestbookCard />
 */
export default function GuestbookCard() {
  const [activeTab, setActiveTab] = useState('list');
  const [selectedId, setSelectedId] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const { entries, isLoading, error, reload, createEntry, deleteEntry } = useGuestbook();

  const selectedEntry = entries.find((entry) => entry.id === selectedId) ?? null;

  const handleCreate = async (values) => {
    await createEntry(values);
    setSelectedId(null);
    setActiveTab('list');
    setNotice('방명록이 등록되었어요. 감사합니다!');
  };

  const handleDelete = async (password) => {
    await deleteEntry(selectedEntry.id, password);
    setIsDeleteOpen(false);
    setSelectedId(null);
    setNotice('글이 삭제되었어요.');
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box role="tablist" aria-label="방명록" sx={{ display: 'flex', gap: 0.5, position: 'relative', zIndex: 1 }}>
        {TABS.map(({ key, label }) => {
          const isActive = activeTab === key;
          return (
            <Box
              key={key}
              component="button"
              type="button"
              role="tab"
              id={`guestbook-tab-${key}`}
              aria-selected={isActive}
              aria-controls={`guestbook-panel-${key}`}
              onClick={() => setActiveTab(key)}
              sx={{
                flex: 1,
                minHeight: isActive ? 46 : 40,
                alignSelf: 'flex-end',
                px: 2,
                font: 'inherit',
                fontSize: '0.95rem',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                color: isActive ? 'var(--ct-accent)' : 'var(--ct-sub)',
                bgcolor: isActive ? 'var(--ct-card)' : 'var(--ct-tab-idle)',
                border: '1px solid var(--ct-line)',
                borderTop: isActive ? '3px solid var(--ct-accent)' : '1px solid var(--ct-line)',
                borderBottom: isActive ? '1px solid var(--ct-card)' : '1px solid var(--ct-line)',
                borderRadius: '12px 12px 0 0',
                mb: '-1px',
                transition: 'color 0.15s, background-color 0.15s',
                '&:hover': { color: 'var(--ct-accent)' },
              }}
            >
              {label}
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          flex: 1,
          minHeight: 460,
          bgcolor: 'var(--ct-card)',
          border: '1px solid var(--ct-line)',
          borderRadius: '0 0 12px 12px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          role="tabpanel"
          id="guestbook-panel-list"
          aria-labelledby="guestbook-tab-list"
          hidden={activeTab !== 'list'}
          sx={{ position: 'absolute', inset: 0, p: selectedEntry ? 1.5 : 0 }}
        >
          {selectedEntry ? (
            <GuestbookDetail
              key={selectedEntry.id}
              entry={selectedEntry}
              onClose={() => setSelectedId(null)}
              onRequestDelete={() => setIsDeleteOpen(true)}
            />
          ) : (
            <GuestbookList
              entries={entries}
              isLoading={isLoading}
              error={error}
              onSelect={setSelectedId}
              onRetry={reload}
              onGoWrite={() => setActiveTab('write')}
            />
          )}
        </Box>

        <Box
          role="tabpanel"
          id="guestbook-panel-write"
          aria-labelledby="guestbook-tab-write"
          hidden={activeTab !== 'write'}
          sx={{ position: 'absolute', inset: 0 }}
        >
          <GuestbookForm onSubmit={handleCreate} />
        </Box>
      </Box>

      {isDeleteOpen && selectedEntry && (
        <GuestbookDeleteDialog onClose={() => setIsDeleteOpen(false)} onConfirm={handleDelete} />
      )}

      <Snackbar
        open={Boolean(notice)}
        autoHideDuration={3500}
        onClose={() => setNotice('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setNotice('')} sx={{ width: '100%' }}>
          {notice}
        </Alert>
      </Snackbar>
    </Box>
  );
}
