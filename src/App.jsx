import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Header } from './components/common';
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import ProjectsPage from './pages/projects-page';

export default function App() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Box>
    </Box>
  );
}
