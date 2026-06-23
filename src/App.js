import React, { useState, useEffect } from "react";
import "./App.css";
import CreateBlog from "./components/CreateBlog";
import Dashboard from "./components/Dashboard";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
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

  const updateBlog = (updatedBlog) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === updatedBlog.id ? updatedBlog : blog
      )
    );
    setEditingBlog(null);
  };

  return (
    <div className="container">
      <h1>📝 Content Creator Blog Manager</h1>

      <CreateBlog
        addBlog={addBlog}
        editingBlog={editingBlog}
        updateBlog={updateBlog}
      />

      <Dashboard
  blogs={blogs}
  deleteBlog={deleteBlog}
  setEditingBlog={setEditingBlog}
  search={search}
/>
      <input
        type="text"
        placeholder="Search blogs..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default App;