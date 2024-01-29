const handleLogoutAPI = async () => {
  const response = await fetch(
    "http://localhost:8000/api/v1/users/logout",
    {
      method: "POST",
      credentials: "include",
    }
  );

  console.log(">>> working" )
};

export default handleLogoutAPI;