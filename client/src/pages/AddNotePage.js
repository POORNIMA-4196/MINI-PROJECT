// src/pages/AddNotePage.js
import React, { useState } from 'react';

const AddNotePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Note Added:\nTitle: ${title}\nContent: ${content}\nCategory: ${category}`);
    // Clear form
    setTitle('');
    setContent('');
    setCategory('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Add a New Note</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          required
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Category (e.g. Work, Personal)"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNotePage;
