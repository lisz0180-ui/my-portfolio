import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { CONTACT_VARS, FIELD_SX, PRIMARY_BUTTON_SX } from './contact-style';

/**
 * 삭제용 비밀번호 입력 모달 (열릴 때마다 새로 마운트해서 사용)
 *
 * Props:
 * @param {function} onClose - 모달 닫기 [Required]
 * @param {function} onConfirm - 비밀번호 확인 후 삭제, (password) => Promise [Required]
 *
 * Example usage:
 * {isOpen && <GuestbookDeleteDialog onClose={close} onConfirm={remove} />}
 */
export default function GuestbookDeleteDialog({ onClose, onConfirm }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!password) {
      setError('비밀번호를 입력해주세요.');
      return;
    }
    setIsSubmitting(true);
    setError('');
    try {
      await onConfirm(password);
    } catch (err) {
      setError(err.message);
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: handleSubmit,
          noValidate: true,
          sx: { ...CONTACT_VARS, bgcolor: 'var(--ct-card)', color: 'var(--ct-ink)', borderRadius: 3 },
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 700 }}>글 삭제</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2, color: 'var(--ct-sub)' }}>
          글을 작성할 때 입력한 비밀번호를 입력하면 삭제됩니다.
        </DialogContentText>
        <TextField
          autoFocus
          fullWidth
          size="small"
          type="password"
          label="비밀번호"
          autoComplete="off"
          value={password}
          error={Boolean(error)}
          helperText={error || ' '}
          onChange={(event) => setPassword(event.target.value)}
          sx={FIELD_SX}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} sx={{ color: 'var(--ct-sub)' }}>취소</Button>
        <Button type="submit" variant="contained" disabled={isSubmitting} sx={PRIMARY_BUTTON_SX}>
          삭제
        </Button>
      </DialogActions>
    </Dialog>
  );
}
