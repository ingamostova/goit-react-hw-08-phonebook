import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Header } from './Header';

export const Layout = () => {
  return (
    <div>
      {/* <AppBar /> */}
      <Header />
      <Suspense fallback={<p>LOADING...</p>}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
