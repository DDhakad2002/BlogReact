import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_BASE_URL = 'http://192.168.29.74:1337/api/blogs/';

const BlogDescription = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}${blogId}?populate=*`);
        const data = await response.json();
        setBlog(data?.data || null);
        setLoading(false);
      } catch (err) {
        setError('Failed to load blog post');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading)
    return (
      <div className="text-center text-lg font-semibold mt-10">Loading...</div>
    );
  if (error)
    return (
      <div className="text-center text-red-500 font-semibold mt-10">
        {error}
      </div>
    );

  // Extract Image URL
  const imageUrl =
    blog?.blogCardImage?.[0]?.formats?.large?.url ||
    blog?.blogCardImage?.[0]?.formats?.medium?.url ||
    blog?.blogCardImage?.[0]?.formats?.small?.url ||
    blog?.blogCardImage?.[0]?.formats?.thumbnail?.url ||
    '/images/hero/0.png';

  return (
    <div className="w-full mt-[20vw] md:mt-[10vw]">
      {/* Full-width Cover Image */}
      <div className="w-full h-[60vh] md:h-[70vh]">
        <img
          src={`http://192.168.29.74:1337${imageUrl}`}
          alt="Blog Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto  py-12">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {blog?.heading}
        </h1>

        {/* Blog Description */}
        <div
          className="text-gray-700 leading-relaxed text-lg"
          dangerouslySetInnerHTML={{
            __html: blog?.description,
          }}
        />
      </div>
    </div>
  );
};

export default BlogDescription;
