import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import EditPost from "./pages/EditPost.jsx";

function App() {
  return (
    <UserContextProvider>

    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <AllPosts /> } />
        <Route path="/login" element={ <Login /> }/>
        <Route path="/register" element={ <Register /> }/>
        <Route path="/create-post" element={ <CreatePost /> }/>
        <Route path="/post/:id" element={ <SinglePost /> }/>
        <Route path="/edit-post/:id" element={ <EditPost /> }/>
      </Route>
    </Routes>
    </UserContextProvider>

      // {/* 3x3 card format code with tailwind */}
      // {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4"> */}

      // {/* </div> */}
  );
}

export default App;
