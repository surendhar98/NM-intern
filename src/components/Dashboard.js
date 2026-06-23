import React from "react";
import { Link } from "react-router-dom";

function Dashboard({
  blogs,
  deleteBlog,
  setEditingBlog,
  search,
}) {
  const filteredBlogs = blogs.filter((blog) =>
    blog.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h2>All Blog Posts</h2>

      {filteredBlogs.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-card"
          >
            <h3>{blog.title}</h3>

            <p>
              <strong>Author:</strong>{" "}
              {blog.author}
            </p>

            <p>
              <strong>Category:</strong>{" "}
              {blog.category}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {blog.status}
            </p>

            <p>
              <strong>Created:</strong>{" "}
              {blog.createdAt}
            </p>

            <div className="btn-group">
              <Link
                to={`/blog/${blog.id}`}
              >
                <button className="view-btn">
                  View
                </button>
              </Link>

              <button
                className="edit-btn"
                onClick={() =>
                  setEditingBlog(blog)
                }
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteBlog(blog.id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;