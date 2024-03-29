const handleLoginUser = async (bodyData) => {
    try {
        const response = await fetch('http://localhost:8000/api/v1/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials:"include",
          body: JSON.stringify(bodyData)
        });
        if (response.ok) {
          return true
        } else {
          return false
        }
      } catch (error) {
        console.error(error);
        return false
      }

}

export default handleLoginUser;