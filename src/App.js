import React, { useState, useEffect } from "react";
import "./App.css";
import CreateBlog from "./components/CreateBlog";
import Dashboard from "./components/Dashboard";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs =
      JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="container">
      <h1>Content Creator Blog Manager</h1>

      <CreateBlog addBlog={addBlog} />

      <Dashboard
        blogs={blogs}
        deleteBlog={deleteBlog}
      />
    </div>
  );
}

export default App;