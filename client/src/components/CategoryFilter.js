import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">All</option>
      {categories.map((cat, i) => (
        <option key={i} value={cat}>{cat}</option>
      ))}
    </select>
  );
};

export default CategoryFilter;
