import React, { useState, useEffect } from 'react';

import TravelBlogCard from '../Card';

const API_BASE_URL = 'http://192.168.29.74:1337/api/blogs?populate=*';

const Gallery = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_BASE_URL);
        const data = await response.json();

        // Process posts data
        const formattedPosts = data.data.map((post) => {
          const imageObj = post?.blogCardImage?.[0];
          const imageUrl =
            imageObj?.formats?.large?.url ||
            imageObj?.formats?.medium?.url ||
            imageObj?.formats?.small?.url ||
            imageObj?.formats?.thumbnail?.url ||
            imageObj?.url ||
            '/images/hero/0.png';
          const tags = post?.tags;
          console.log(tags, 'tags');
          return {
            id: post.id,
            img: `http://192.168.29.74:1337${imageUrl}`,
            title: post.heading,
            desc: post.description,
            createdAt: new Date(post.createdAt),
            slug: post.documentId,
            category: post.category || 'Uncategorized',
            tags,
          };
        });

        setPosts(formattedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="pb-5">
      <div className="post-list grid md:grid-cols-3  grid-cols-1 gap-2">
        {posts.map((post, index) => (
          <TravelBlogCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
