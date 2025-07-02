import React from 'react';
import './NoteCard.css';

const NoteCard = ({ title, content, category }) => {
  return (
    <div className="note-card">
      <h3>{title}</h3>
      <p>{content}</p>
      <small>{category}</small>
    </div>
  );
};

export default NoteCard;
