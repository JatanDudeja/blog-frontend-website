const handleLogoutAPI = async () => {
  const response = await fetch(
    "https://bloggers-api-64w8.onrender.com/api/v1/users/logout",
    {
      method: "POST",
      credentials: "include",
    }
  );

  console.log(">>> working" )
};

export default handleLogoutAPI;