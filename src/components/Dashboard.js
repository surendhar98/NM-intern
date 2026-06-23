import React from "react";

function Dashboard({ blogs, deleteBlog }) {
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

            <button
              onClick={() => deleteBlog(blog.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;