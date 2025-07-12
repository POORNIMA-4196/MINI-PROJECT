
import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });
      alert('Login successful ✅');
      localStorage.setItem('token', res.data.token); // Save token to local storage
    } catch (err) {
      alert('Login failed ❌');
      console.error(err.response?.data?.message || err.message);
    }
  };

  return (
    <div>
      <center><h2>Login</h2></center>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
