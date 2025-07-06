// src/pages/HomePage.js
import React from 'react';
import NoteCard from '../components/NoteCard';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';

const sampleNotes = [
  { title: 'Meeting Notes', content: 'Discuss UI design with team.', category: 'Work' },
  { title: 'Grocery List', content: 'Buy milk, eggs, and bread.', category: 'Personal' },
  { title: 'Project Ideas', content: 'Start working on React project.', category: 'Important' },
];

const HomePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Header />
      <CategoryList />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {sampleNotes.map((note, index) => (
          <NoteCard
            key={index}
            title={note.title}
            content={note.content}
            category={note.category}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
