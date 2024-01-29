import React, { useEffect, useState } from 'react';
import getAllBlogs from '../api/getAllBlogs';
import Post from '../components/Post';

function AllPosts() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await getAllBlogs();
        setBlogs(response?.data);
      } catch (error) {
        console.error('Error fetching blogs:', error.message);
      }
    };

    getBlogs();
  }, []);

  return (
    <div>
      {blogs.length > 0 &&
        blogs.map((blog) => (
          <Post key={blog._id} blog={blog} />
        ))}
    </div>
  );
}

export default AllPosts;
