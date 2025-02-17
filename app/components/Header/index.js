import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  // Prevent body scrolling when the sidebar is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Reset on unmount
    };
  }, [open]);

  return (
    <div className="w-full text-black h-16 md:h-20 flex items-center justify-between px-5 md:px-10 lg:px-16 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <img src="./images/logo-header.png" alt="Lama Logo" />
      </Link>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="flex flex-col gap-[5.4px]">
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open && 'rotate-45'
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${
                open && 'opacity-0'
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open && '-rotate-45'
              }`}
            ></div>
          </div>
        </div>

        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen bg-[#fffcfc] flex flex-col md:hidden items-center justify-start pt-[3rem] gap-8 font-medium text-lg fixed top-16 right-0 transition-all ease-in-out z-50 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/posts?sort=trending" onClick={() => setOpen(false)}>
            Trending
          </Link>
          <Link to="/posts?sort=popular" onClick={() => setOpen(false)}>
            Most Popular
          </Link>
          <Link to="/" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="py-2 px-4 rounded-3xl bg-custom-orange text-white">
              Login 👋
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center font-semibold gap-8 xl:gap-12">
        <Link to="/">Home</Link>
        <Link to="/posts?sort=trending">Trending</Link>
        <Link to="/posts?sort=popular">Most Popular</Link>
        <Link to="/">About</Link>
        <Link to="/login" onClick={() => setOpen(false)}>
          <button className="py-2 px-4 rounded-3xl font-semibold bg-custom-orange text-white">
            Login 👋
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
