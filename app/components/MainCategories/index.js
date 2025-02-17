import { Link } from 'react-router-dom';
// import Search from './Search';
import React from 'react';
const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center md:gap-4 xl:gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-custom-orange text-white rounded-full px-2 md:px-[1vw] xl:px-[2vw] py-2"
        >
          All Posts
        </Link>
        <Link
          to="/web-design"
          className="hover:bg-blue-50 rounded-full x-2 md:px-[1vw] xl:px-[2vw] py-2 text-black "
        >
          Web Design
        </Link>
        <Link
          to="/development"
          className="hover:bg-blue-50 rounded-full x-2 md:px-[1vw] xl:px-[2vw] py-2 text-black  "
        >
          Development
        </Link>
        <Link
          to="/databases"
          className="hover:bg-blue-50 rounded-full x-2 md:px-[1vw] xl:px-[2vw] py-2  text-black"
        >
          Databases
        </Link>
        <Link
          to="/seo"
          className="hover:bg-blue-50 rounded-full x-2 md:px-[1vw] xl:px-[2vw] py-2 text-black "
        >
          Search Engines
        </Link>
        <Link
          to="/marketing"
          className="hover:bg-blue-300 rounded-full x-2 md:px-[1vw] xl:px-[2vw] py-2  text-black "
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      {/* <Search /> */}
    </div>
  );
};

export default MainCategories;
