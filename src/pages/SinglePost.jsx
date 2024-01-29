import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SinglePost() {
  const [singlePostData, setSinglePostData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleSinglePost = async () => {
      const response = await fetch(
        `http://localhost:8000/api/v1/blogs/post/${params.id}`,
        {
          credentials: "include",
        }
      );
      setSinglePostData(await response.json());
    };

    handleSinglePost();
  }, [params.id]);

  const handleEditClick = () => {
    navigate(`/edit-post/${params.id}`);
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blogs/post/${params.id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (response.ok) {
        navigate("/");
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div
        className="bg-white p-6 rounded-md shadow-md"
        style={{
          backgroundImage: `url(${singlePostData?.data?.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">{singlePostData?.data?.title}</h2>
        <h3 className="text-xl text-gray-200 mb-4">{singlePostData?.data?.subTitle}</h3>
        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-200 mr-2">By:</span>
          <span className="text-sm font-semibold text-gray-200">{singlePostData?.data?.author?.username}</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Edit
          </button>
          <button
            onClick={handleDeleteClick}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="bg-white p-6 mt-4 rounded-md shadow-md">
        <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{__html : singlePostData?.data?.blogContent}} />
      </div>
    </div>
  );
}

export default SinglePost;
