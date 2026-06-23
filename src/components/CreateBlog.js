import React, { useState, useEffect } from "react";

function CreateBlog({
  addBlog,
  editingBlog,
  updateBlog,
}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("Draft");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setAuthor(editingBlog.author);
      setCategory(editingBlog.category);
      setStatus(editingBlog.status);
      setContent(editingBlog.content);
    }
  }, [editingBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingBlog) {
      updateBlog({
        ...editingBlog,
        title,
        author,
        category,
        status,
        content,
      });
    } else {
      const newBlog = {
        id: Date.now(),
        title,
        author,
        category,
        status,
        content,
        createdAt: new Date().toLocaleString(),
      };

      addBlog(newBlog);
    }

    setTitle("");
    setAuthor("");
    setCategory("");
    setStatus("Draft");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="blog-form"
    >
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        required
      />

      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) =>
          setAuthor(e.target.value)
        }
        required
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        required
      >
        <option value="">
          Select Category
        </option>

        <option value="Technology">
          Technology
        </option>

        <option value="Education">
          Education
        </option>

        <option value="Gaming">
          Gaming
        </option>

        <option value="Lifestyle">
          Lifestyle
        </option>
      </select>

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option value="Draft">
          Draft
        </option>

        <option value="Published">
          Published
        </option>
      </select>

      <textarea
        placeholder="Write your blog content..."
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        required
      />

      <button type="submit">
        {editingBlog
          ? "Update Blog"
          : "Create Blog"}
      </button>
    </form>
  );
}

export default CreateBlog;