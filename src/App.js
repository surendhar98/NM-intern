import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

import CreateBlog from "./components/CreateBlog";
import Dashboard from "./components/Dashboard";
import BlogDetails from "./components/BlogDetails";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] =
    useState(null);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    const storedBlogs =
      JSON.parse(
        localStorage.getItem("blogs")
      ) || [];

    setBlogs(storedBlogs);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "blogs",
      JSON.stringify(blogs)
    );
  }, [blogs]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  const deleteBlog = (id) => {
    setBlogs(
      blogs.filter(
        (blog) => blog.id !== id
      )
    );
  };

  const updateBlog = (
    updatedBlog
  ) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === updatedBlog.id
          ? updatedBlog
          : blog
      )
    );

    setEditingBlog(null);
  };

  return (
    <BrowserRouter basename="/NM-intern">
      <div className="container">
        <h1>
          📝 Content Creator Blog
          Manager
        </h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <CreateBlog
                  addBlog={addBlog}
                  editingBlog={
                    editingBlog
                  }
                  updateBlog={
                    updateBlog
                  }
                />

                <input
                  type="text"
                  placeholder="Search Blogs..."
                  className="search-box"
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                />

                <Dashboard
                  blogs={blogs}
                  deleteBlog={
                    deleteBlog
                  }
                  setEditingBlog={
                    setEditingBlog
                  }
                  search={search}
                />
              </>
            }
          />

          <Route
            path="/blog/:id"
            element={
              <BlogDetails
                blogs={blogs}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;