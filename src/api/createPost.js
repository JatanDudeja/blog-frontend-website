const createPostAPI = async (bodyData) => {
  try {
    console.log(">>>", bodyData);

    const response = await fetch(
      "http://blog-api.onrender.com/api/v1/blogs/create-post",
      {
        method: "POST",
        body: bodyData,
        credentials: "include",
      }
    );

    return response;

  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default createPostAPI;
