const handleRegisterUser = async (bodyData) => {
    try {
        const response = await fetch('https://bloggers-api-64w8.onrender.com/api/v1/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyData)
        });
        if (response.ok) {
          return response?.statusCode
        } else {
          return response?.statusCode
        }
      } catch (error) {
        console.error(error);
      }

}

export default handleRegisterUser;