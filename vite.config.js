import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// GitHub Pages 하위 경로(/my-portfolio/)에서 서비스되므로 base를 지정합니다.
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
});
