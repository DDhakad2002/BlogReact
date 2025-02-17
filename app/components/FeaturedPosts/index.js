import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import React, { useState, useEffect } from 'react';
import Image from '../Image';

const DEFAULT_IMAGE = '/images/hero/0.png'; // Replace with actual dummy image path

const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const response = await fetch(
          'http://192.168.29.74:1337/api/blogs?populate=*',
        );
        const data = await response.json();

        const formattedPosts = data.data.slice(0, 4).map((post) => {
          // Extract first image object from blogCardImage array if available
          console.log(post, 'posts');
          const imageObj = post?.blogCardImage?.[0];
          console.log(imageObj, 'imgObj');
          // Get the best available image URL
          const imageUrl =
            imageObj?.formats?.large?.url ||
            imageObj?.formats?.medium?.url ||
            imageObj?.formats?.small?.url ||
            imageObj?.formats?.thumbnail?.url ||
            imageObj?.url ||
            DEFAULT_IMAGE;

          return {
            id: post.id,
            img: 'http://192.168.29.74:1337' + imageUrl,
            title: post.heading,
            desc: post.description,
            createdAt: new Date(post.createdAt),
            slug: post.documentId,
            category: 'Travel', // Default category since API doesn't provide
          };
        });
        console.log(formattedPosts, 'set data');
        setPosts(formattedPosts);
      } catch (error) {
        console.error('Error fetching featured posts:', error);
      }
    };

    fetchFeaturedPosts();
  }, []);

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        {posts[0]?.img && (
          <Image
            src={posts[0].img}
            className="rounded-3xl object-cover border border-black text-black "
            w="895"
          />
        )}
        {/* Details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg text-black ">01.</h1>
          <Link className="text-blue-800 lg:text-lg">{posts[0]?.category}</Link>
          <span className="text-gray-500">
            {posts[0]?.createdAt && format(posts[0].createdAt)}
          </span>
        </div>
        {/* Title */}
        <Link
          to={`/${posts[0]?.slug}`}
          className="text-xl lg:text-3xl font-semibold lg:font-bold text-black "
        >
          {posts[0]?.title}
        </Link>
      </div>

      {/* Other Posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {posts.slice(1).map((post, index) => (
          <div key={post.id} className="lg:h-1/3 flex justify-between gap-4">
            {/* Image */}
            {post.img && (
              <div className="w-1/3 aspect-video">
                <Image
                  src={post.img}
                  className="rounded-3xl object-cover w-full h-full"
                  w="298"
                />
              </div>
            )}
            {/* Details and Title */}
            <div className="w-2/3">
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold text-black">{index + 2}.</h1>
                <Link className="text-blue-800">{post.category}</Link>
                <span className="text-gray-500 text-sm">
                  {post.createdAt && format(post.createdAt)}
                </span>
              </div>
              <Link
                to={`/${post.slug}`}
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium text-black "
              >
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
