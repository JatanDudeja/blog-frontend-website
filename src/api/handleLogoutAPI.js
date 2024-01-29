const handleLogoutAPI = async () => {
  const response = await fetch(
    "http://blog-api.onrender.com/api/v1/users/logout",
    {
      method: "POST",
      credentials: "include",
    }
  );

  console.log(">>> working" )
};

export default handleLogoutAPI;