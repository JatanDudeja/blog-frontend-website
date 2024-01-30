const getAllBlogs = async () => {
    try {
      const response = await fetch("https://bloggers-api-64w8.onrender.com/api/v1/blogs/allBlogs");
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
  
      return responseData;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  };
  
  export default getAllBlogs;
  