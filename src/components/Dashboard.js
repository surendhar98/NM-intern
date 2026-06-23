import React from "react";

function Dashboard({ blogs, deleteBlog, setEditingBlog }) {
  return (
    <div className="dashboard">
      <h2>All Blog Posts</h2>

      {blogs.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>

            <p>
              <strong>Author:</strong> {blog.author}
            </p>

            <p>{blog.content}</p>

            <div className="btn-group">
              <button
                className="edit-btn"
                onClick={() => setEditingBlog(blog)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteBlog(blog.id)}
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