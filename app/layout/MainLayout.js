import { Footer, Header } from '@/components';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="md:px-[8vw] px-[5vw]  w-full">
      <Header />
      <div className="mt-8  pt-[5vw]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
