export const dummyPosts = [
  {
    _id: '1',
    title: 'Introduction to React',
    desc: 'Learn the basics of React and how to build modern web applications.',
    img: 'https://dummyimage.com/735x400/fff',
    slug: 'introduction-to-react',
    category: 'Development',
    user: {
      username: 'john_doe',
    },
    createdAt: new Date(),
  },
  {
    _id: '2',
    title: 'Advanced CSS Techniques',
    desc: 'Explore advanced CSS techniques to create stunning web designs.',
    img: 'https://dummyimage.com/735x400/fff',
    slug: 'advanced-css-techniques',
    category: 'Web Design',
    user: {
      username: 'jane_doe',
    },
    createdAt: new Date(),
  },
  {
    _id: '3',
    title: 'SEO Best Practices',
    desc: 'Discover the best practices for optimizing your website for search engines.',
    img: 'https://dummyimage.com/735x400/fff',
    slug: 'seo-best-practices',
    category: 'SEO',
    user: {
      username: 'john_doe',
    },
    createdAt: new Date(),
  },
  {
    _id: '4',
    title: 'Database Management',
    desc: 'Learn how to manage and optimize databases for your applications.',
    img: 'https://dummyimage.com/735x400/fff',
    slug: 'database-management',
    category: 'Databases',
    user: {
      username: 'jane_doe',
    },
    createdAt: new Date(),
  },
];

export const dummyFeaturedPosts = dummyPosts.slice(0, 4);
