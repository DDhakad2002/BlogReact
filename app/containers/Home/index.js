import { MainCategories } from '@/components';
import FeaturedPosts from '@/components/FeaturedPosts';
import Gallery from '@/components/Gallery';
import PostList from '@/components/PostList';
import SectionHeading from '@/components/SectionHeading';
import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const headings = [
  'Explore, Learn, and Inspire',
  'Your Daily Dose of Insights & Stories',
  'Unveiling Ideas, One Blog at a Time',
  'Where Words Create Wonders',
  'Discover Fresh Perspectives & Trends',
  'Fuel Your Curiosity with Engaging Reads',
  'The Hub of Knowledge & Inspiration',
  'Stories That Matter, Insights That Inspire',
  'Bringing Thoughts to Life Through Words',
  'Stay Curious, Stay Inspired',
];

const Homepage = () => {
  return (
    <div className="mt-8 pt-16 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/" className="text-black">
          Home
        </Link>
        <span className="text-black ">•</span>
        <span className="text-orange-600">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* Typewriter titles */}
        <div className="relative overflow-hidden">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold font-shafarik">
            <Typewriter
              words={headings}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000} // Time before switching to the next word
            />
          </h1>
        </div>
        {/* animated button */}
        <Link to="write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      <SectionHeading title="Hikes" />
      <Gallery />
      <SectionHeading title="Latest Posts" />
      {/* POST LIST */}
      <div>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
