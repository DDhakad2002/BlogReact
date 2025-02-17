import React from 'react';
import loadable from '../utils/loadable';
import Loading from './Loading';

// Loading - No need to lazy load this component
export { default as Loading } from './Loading';

export const Welcome = loadable(() => import('./Welcome'), {
  fallback: <Loading />,
});
export const Navbar = loadable(() => import('./Navbar'), {
  fallback: <Loading />,
});
export const Header = loadable(() => import('./Header'), {
  fallback: <Loading />,
});
export const MainCategories = loadable(() => import('./MainCategories'), {
  fallback: <Loading />,
});
export const Footer = loadable(() => import('./Footer'), {
  fallback: <Loading />,
});
