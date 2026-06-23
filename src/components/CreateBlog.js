import React, { useState } from "react";

function CreateBlog({ addBlog }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title,
      author,
      content,
    };

    addBlog(newBlog);

    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <textarea
        placeholder="Write your blog content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>

      <button type="submit">Add Blog</button>
    </form>
  );
}

export default CreateBlog;