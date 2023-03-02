import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Header } from './Header';
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <div>
      {/* <AppBar /> */}
      <Header />
      <Container sx={{ mt: '1rem', mb: '1rem' }}>
        <Suspense fallback={<p>LOADING...</p>}>
          <Outlet />
        </Suspense>
      </Container>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
