import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import React from 'react';
import Image from '../Image';
import PropTypes from 'prop-types';

// Server URL
const SERVER_URL = 'http://192.168.29.74:1337';

// Function to update image URLs and extract the first paragraph
const extractFirstParagraph = (html) => {
  if (!html) return '';

  // Fix relative image paths
  html = html.replace(/src="\/uploads\//g, `src="${SERVER_URL}/uploads/`);

  // Extract first <p> tag using regex
  const match = html.match(/<p[^>]*>(.*?)<\/p>/i);
  return match ? match[0] : ''; // Return first <p> block if found
};

const PostListItem = ({ post }) => {
  console.log('vinay jan', post);

  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image src={post.img} className="rounded-2xl object-cover" w="735" />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link
          to={`/${post.slug}`}
          className="text-4xl font-semibold text-black"
        >
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <span>on</span>
          <Link className="text-primary-100">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>

        {/* Show only first paragraph */}
        <p
          className="text-black"
          dangerouslySetInnerHTML={{ __html: extractFirstParagraph(post.desc) }}
        />

        <Link
          to={`/${post.slug}`}
          className="underline text-primary-100 text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

// Add prop-type validation for the `post` object
PostListItem.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired, // post ID is required
    title: PropTypes.string.isRequired, // title is required
    desc: PropTypes.string.isRequired, // description is required
    img: PropTypes.string, // img is optional
    slug: PropTypes.string.isRequired, // slug is required
    category: PropTypes.string.isRequired, // category is required
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date), // createdAt can be a string or Date object
    ]).isRequired, // createdAt is required
  }).isRequired, // post object is required
};

export default PostListItem;
