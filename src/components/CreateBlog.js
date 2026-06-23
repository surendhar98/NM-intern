import React, { useState, useEffect } from "react";

function CreateBlog({ addBlog, editingBlog, updateBlog }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setAuthor(editingBlog.author);
      setContent(editingBlog.content);
    }
  }, [editingBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingBlog) {
      updateBlog({
        id: editingBlog.id,
        title,
        author,
        content,
      });
    } else {
      const newBlog = {
        id: Date.now(),
        title,
        author,
        content,
      };

      addBlog(newBlog);
    }

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
      />

      <button type="submit">
        {editingBlog ? "Update Blog" : "Add Blog"}
      </button>
    </form>
  );
}

export default CreateBlog;