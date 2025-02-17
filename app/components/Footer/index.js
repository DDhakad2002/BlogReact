import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-transparent text-black py-10 border-t border-black pt-[2vw]">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* BRAND & LOGO */}
        <div>
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold">
            <img
              src="./images/logo-header.png"
              alt="Logo"
              className="md:w-[10vw] w-[30vw]"
            />
          </Link>
          <p className="text-sm mt-3 opacity-80">
            Explore the world with us, one adventure at a time.
          </p>
        </div>

        {/* NAVIGATION LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/posts?sort=trending" className="hover:underline">
                Trending
              </Link>
            </li>
            <li>
              <Link to="/posts?sort=popular" className="hover:underline">
                Most Popular
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL MEDIA LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-blue-600 transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-600 transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-blue-400 transition" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="hover:text-red-600 transition" />
            </a>
          </div>
        </div>

        {/* NEWSLETTER SUBSCRIPTION */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <p className="text-sm opacity-80 mb-3">
            Get the latest travel stories and tips.
          </p>
          <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 w-full text-black outline-none"
            />
            <button className="bg-gray-800 px-4 py-2">
              <FaEnvelope className="text-white text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-8 text-center text-sm opacity-70">
        &copy; {new Date().getFullYear()} Travelogue. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
