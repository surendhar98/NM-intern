import React from "react";
import { useParams, Link } from "react-router-dom";

function BlogDetails({ blogs }) {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id.toString() === id
  );

  if (!blog) {
    return <h2>Blog Not Found</h2>;
  }

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>

      <p>
        <strong>Author:</strong> {blog.author}
      </p>

      <p>
        <strong>Category:</strong> {blog.category}
      </p>

      <p>
        <strong>Status:</strong> {blog.status}
      </p>

      <p>
        <strong>Created:</strong> {blog.createdAt}
      </p>

      <hr />

      <p>{blog.content}</p>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default BlogDetails;