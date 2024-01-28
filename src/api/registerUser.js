const handleRegisterUser = async (bodyData) => {
    try {
        const response = await fetch('http://localhost:8000/api/v1/users/register', {
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