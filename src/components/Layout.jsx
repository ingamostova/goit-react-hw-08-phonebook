import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Header } from './Header';
import { Container } from '@mui/material';
import { RotatingLines } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <div>
      {/* <AppBar /> */}
      <Header />
      <Suspense
        fallback={
          <Container sx={{ textAlign: 'center' }}>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </Container>
        }
      >
        <Container sx={{ mt: '1rem', mb: '1rem' }} maxWidth="xl">
          <Outlet />
        </Container>
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
