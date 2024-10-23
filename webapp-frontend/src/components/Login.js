import React, { useState } from 'react';
import axios from '../api/axios';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data); // Debug the response
      setUser(response.data.user);
      alert('Login successful!');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Invalid credentials. Please try again.');
      } else {
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

