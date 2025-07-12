import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNotePage from './pages/AddNotePage';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', textAlign: 'center' }}>
        <Link to="/" style={{ marginRight: '20px' }}>🏠 Home</Link>
        <Link to="/add">➕ Add Note</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddNotePage />} />
      </Routes>
    </Router>
  );
}

export default App;
