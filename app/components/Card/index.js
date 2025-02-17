import { AiOutlineDoubleRight } from 'react-icons/ai';
import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const TravelBlogCard = ({ post }) => {
  // Limit title to 6 words
  const truncatedTitle =
    post.title.split(' ').slice(0, 6).join(' ') +
    (post.title.split(' ').length > 6 ? '...' : '');
  const navigate = useNavigate();
  return (
    <motion.div
      className="md:w-[25vw] w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Dynamic Image */}
      <img
        src={post.img}
        alt={post.title}
        className="md:w-[25vw] w-full object-cover rounded-lg"
      />

      <div className="px-4 py-6 flex flex-col items-center justify-center">
        {/* Dynamic Tags with <> separator */}
        <div className="flex items-center justify-center text-primary-100">
          {post.tags.map((tag, index) => (
            <React.Fragment key={tag.id}>
              <span className="md:text-[1.5vw] text-lg  font-medium md:font-medium px-3 py-1rounded-md">
                {tag.name}
              </span>
              {index < post.tags.length - 1 && (
                <span className="mx-2 text-primary-100">{'<>'}</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Dynamic Title (Limited to 6 Words) */}
        <h2 className="text-xl font-bold text-gray-800 text-center mt-2">
          {truncatedTitle}
        </h2>

        {/* Dynamic Date */}
        <p className="text-sm text-gray-500 py-2">
          {post.createdAt ? post.createdAt.toDateString() : 'Unknown Date'}
        </p>

        {/* Separator Line */}
        <div className="md:w-[10vw] w-[60vw] my-[5vw] md:my-[1vw] h-[1px] opacity-60 bg-custom-orange "></div>

        {/* Read More Button */}
        <div
          onClick={() => navigate(`/${post.slug}`)}
          className="px-3 py-1 text-white bg-custom-orange font-bold uppercase flex justify-center opacity-80 hover:opacity-100 items-center text-[3vw] md:text-[1vw] gap-2 cursor-pointer"
        >
          Read More <AiOutlineDoubleRight />
        </div>
      </div>
    </motion.div>
  );
};

TravelBlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    slug: PropTypes.string,
    category: PropTypes.string,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default TravelBlogCard;
