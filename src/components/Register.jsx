import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import handleRegisterUser from "../api/registerUser";

function Register() {
  const [registerDetails, setRegisterDetails] = useState({
    "email": "",
    "username": "",
    "password": ""
  });

  const [redirect, setRedirect] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handleRegisterUser(registerDetails);

    if (response) {
      setRedirect(true)
    } else {
      alert("Please Fill In All The Details To Register!")

    }
  };

  if(redirect)
    return <Navigate to={"/login"}/>


  return (
    <div className="">
      <h2 className="mt-4" style={{ textAlign: "center", marginTop: 50 }}>
        Register
      </h2>
      <form
        className="max-w-sm mx-auto bg-slate-900 rounded-md"
        style={{ padding: 50, marginTop: 50 }}
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Username
          </label>
          <input
            id="username"
            onChange={(e) => setRegisterDetails((prevDetails) => ({ ...prevDetails, username: e.target.value }))}
            value={registerDetails.username}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setRegisterDetails((prevDetails) => ({ ...prevDetails, email: e.target.value }))}
            value={registerDetails.email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setRegisterDetails((prevDetails) => ({ ...prevDetails, password: e.target.value }))}
            value={registerDetails.password}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};


export default Register;
