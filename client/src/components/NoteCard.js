import React from 'react';
import './NoteCard.css'; // ✅ This imports your styling

const NoteCard = ({ title, content, category }) => {
  return (
    <div className="note-card">
      <h3>{title}</h3>
      <p>{content}</p>
      <span className="category">{category}</span>
    </div>
  );
};

export default NoteCard;
