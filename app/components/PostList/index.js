import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import React, { useState, useEffect, useCallback } from 'react';
import PostListItem from '../PostListItem';

const API_BASE_URL =
  'http://192.168.29.74:1337/api/blogs?populate=*&sort=id:desc';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 5; // 5 posts per page

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}&pagination[start]=${
          currentPage * pageSize
        }&pagination[limit]=${pageSize}`,
      );
      const data = await response.json();

      // Extract pagination meta data
      const paginationMeta = data.meta.pagination;
      setTotalPages(Math.ceil(paginationMeta.total / pageSize));

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

        return {
          id: post.id,
          img: `http://192.168.29.74:1337${imageUrl}`,
          title: post.heading,
          desc: post.description,
          createdAt: new Date(post.createdAt),
          slug: post.documentId,
          category: post.category || 'Uncategorized',
        };
      });

      setPosts(formattedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }, [currentPage, pageSize]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <div className="pb-5">
      <div className="post-list">
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>

      <div className="pagination-controls flex items-center justify-center gap-4 mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="px-4 py-2 text-orange-500 border border-orange-500 rounded-lg transition duration-300 
               hover:bg-custom-orange hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <AiOutlineDoubleLeft />
        </button>

        <span className="text-lg font-semibold text-orange-600">
          Page {currentPage + 1} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages - 1}
          className="px-4 py-2 text-orange-500 border border-orange-500 rounded-lg transition duration-300 
               hover:bg-custom-orange hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <AiOutlineDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default PostList;
