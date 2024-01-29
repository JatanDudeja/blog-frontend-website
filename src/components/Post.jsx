import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

function Post({blog}) {
  const { isLoggedIn } = useContext(UserContext)
  let url = "/"

  if(isLoggedIn){
    url = `/post/${blog?._id}`
  }

  const handlePostClick = () => {
    if(!isLoggedIn){
      alert("Please login/register to view blog post.")
    }
  }
  return (

    <Link to={url} onClick={handlePostClick}>
    <div className="max-w-2xl mx-auto bg-white rounded-md overflow-hidden shadow-md mb-4 mt-16 mt-4">
      {/* Left Section */}
      <div className="flex justify-between items-center p-4">
        <div className="flex-1 pr-4">
          <h2 className="text-xl font-bold mb-2">{blog?.title}</h2>
          <h4 className="text-l font-bold mb-2">{blog?.subTitle}</h4>
          <p className="text-gray-600">
            {blog?.blogContent}
          </p>
          <span>{blog.author?.username}</span>
        </div>

        {/* Right Section */}
        <div className="flex-shrink-0 w-32 h-32">
          <img src={blog?.imageUrl} alt="Post Image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Post;
