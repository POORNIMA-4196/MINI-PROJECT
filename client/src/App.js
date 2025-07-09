import React from 'react';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNotePage from './pages/AddNotePage';

// Inside <Routes>
<Route path="/login" element={<LoginPage />} />



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
<Routes>
  <Route
    path="/"
    element={
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    }
  />
  <Route
    path="/add"
    element={
      <PrivateRoute>
        <AddNotePage />
      </PrivateRoute>
    }
  />
  <Route path="/login" element={<LoginPage />} />
</Routes>


export default App;
