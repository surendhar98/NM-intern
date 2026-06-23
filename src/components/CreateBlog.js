import React, { useState, useEffect } from "react";

function CreateBlog({ addBlog, editingBlog, updateBlog }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setAuthor(editingBlog.author);
      setContent(editingBlog.content);
      setCategory(editingBlog.category || "");
    }
  }, [editingBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingBlog) {
      updateBlog({
        id: editingBlog.id,
        title,
        author,
        category,
        content,
        createdAt: editingBlog.createdAt,
      });
    } else {
      const newBlog = {
        id: Date.now(),
        title,
        author,
        category,
        content,
        createdAt: new Date().toLocaleString(),
      };

      addBlog(newBlog);
    }

    setTitle("");
    setAuthor("");
    setCategory("");
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

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="Technology">Technology</option>
        <option value="Education">Education</option>
        <option value="Gaming">Gaming</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>

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