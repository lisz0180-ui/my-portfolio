import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FIELD_SX, PRIMARY_BUTTON_SX } from './contact-style';

const INITIAL_VALUES = {
  name: '',
  password: '',
  email: '',
  phone: '',
  region: '',
  age: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** 입력값 검증 후 { 필드명: 오류메시지 } 반환 */
function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = '이름을 입력해주세요.';
  if (values.password.length < 4) errors.password = '비밀번호는 4자 이상 입력해주세요.';
  if (values.email && !EMAIL_PATTERN.test(values.email)) errors.email = '이메일 형식을 확인해주세요.';
  if (values.age && !(Number(values.age) >= 1 && Number(values.age) <= 120)) errors.age = '1~120 사이로 입력해주세요.';
  if (!values.message.trim()) errors.message = '메시지를 입력해주세요.';
  return errors;
}

/**
 * 방명록 글쓰기 폼 (이름·비밀번호 → 선택 정보 2단 → 메시지)
 *
 * Props:
 * @param {function} onSubmit - 등록 처리, (values) => Promise. 실패 시 Error 를 던진다 [Required]
 *
 * Example usage:
 * <GuestbookForm onSubmit={createEntry} />
 */
export default function GuestbookForm({ onSubmit }) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError('');
    try {
      await onSubmit(values);
      setValues(INITIAL_VALUES);
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const field = (name, label, { helperText, ...rest } = {}) => (
    <TextField
      fullWidth
      size="small"
      label={label}
      value={values[name]}
      onChange={handleChange(name)}
      error={Boolean(errors[name])}
      helperText={errors[name] || helperText}
      sx={FIELD_SX}
      {...rest}
    />
  );

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2, p: 2.5 }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          {field('name', '이름 *', { autoComplete: 'name', slotProps: { htmlInput: { maxLength: 20 } } })}
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          {field('password', '비밀번호 *', {
            type: 'password',
            autoComplete: 'new-password',
            helperText: '글 삭제 시 필요해요',
            slotProps: { htmlInput: { maxLength: 50 } },
          })}
        </Grid>
      </Grid>

      <Box sx={{ fontSize: '0.78rem', color: 'var(--ct-sub)' }}>
        아래 항목은 선택이며, 이메일·전화번호는 공개되지 않고 저장만 됩니다.
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          {field('email', '이메일 (선택)', { type: 'email', autoComplete: 'email', slotProps: { htmlInput: { maxLength: 100 } } })}
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          {field('phone', '전화번호 (선택)', { type: 'tel', autoComplete: 'tel', slotProps: { htmlInput: { maxLength: 30 } } })}
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          {field('region', '거주 지역 (선택)', { slotProps: { htmlInput: { maxLength: 30 } } })}
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          {field('age', '나이 (선택)', { type: 'number', slotProps: { htmlInput: { min: 1, max: 120, inputMode: 'numeric' } } })}
        </Grid>
      </Grid>

      {field('message', '메시지 *', {
        multiline: true,
        minRows: 4,
        slotProps: { htmlInput: { maxLength: 1000 } },
      })}

      {submitError && <Alert severity="error">{submitError}</Alert>}

      <Button type="submit" variant="contained" disabled={isSubmitting} sx={PRIMARY_BUTTON_SX}>
        {isSubmitting ? '등록 중...' : '방명록 남기기'}
      </Button>
    </Box>
  );
}
