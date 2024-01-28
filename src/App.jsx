import React from "react";
import Post from "./components/Post.jsx";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import CreatePost from "./components/CreatePost.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";

function App() {
  return (
    <UserContextProvider>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Post />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/create-post" element={<CreatePost />}/>
      </Route>
    </Routes>
    </UserContextProvider>

      // {/* 3x3 card format code with tailwind */}
      // {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4"> */}

      // {/* </div> */}
  );
}

export default App;
