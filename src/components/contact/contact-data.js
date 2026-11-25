import EmailOutlined from '@mui/icons-material/EmailOutlined';
import GitHub from '@mui/icons-material/GitHub';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import PhoneOutlined from '@mui/icons-material/PhoneOutlined';
import PlaceOutlined from '@mui/icons-material/PlaceOutlined';

/** TODO: 아래 연락처/SNS 값은 임시 예시입니다. 실제 정보로 교체해주세요. */
export const CONTACT_ITEMS = [
  { key: 'email', icon: EmailOutlined, label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
  { key: 'phone', icon: PhoneOutlined, label: 'Phone', value: '010-0000-0000', href: 'tel:01000000000' },
  { key: 'location', icon: PlaceOutlined, label: 'Location', value: '대한민국, 서울' },
];

export const SNS_ITEMS = [
  { key: 'github', icon: GitHub, value: 'github.com/lisz0180-ui', href: 'https://github.com/lisz0180-ui' },
  { key: 'instagram', icon: Instagram, value: 'instagram.com/your-id', href: 'https://instagram.com/your-id' },
  { key: 'linkedin', icon: LinkedIn, value: 'linkedin.com/in/your-id', href: 'https://linkedin.com/in/your-id' },
];
