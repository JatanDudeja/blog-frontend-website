import React from 'react';
import image from "../images/image.png";

function Post() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-md overflow-hidden shadow-md">
      {/* Left Section */}
      <div className="flex justify-between items-center p-4">
        <div className="flex-1 pr-4">
          <h2 className="text-xl font-bold mb-2">Yoyo</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eum natus quaerat nisi quia doloremque obcaecati et maxime vero quos? Nam provident inventore velit, debitis quibusdam consequatur doloremque nulla quas.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-shrink-0 w-32 h-32">
          <img src={image} alt="Post Image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Post;
