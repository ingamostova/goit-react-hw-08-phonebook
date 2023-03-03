import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Container } from '@mui/material';
import { RotatingLines } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <div>
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
    </div>
  );
};
