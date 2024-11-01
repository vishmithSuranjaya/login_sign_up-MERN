import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        // Navigate only if login is successful
        if (result.data === "Success") {
          navigate('/home'); // Change this to your desired route after successful login
        } else {
          alert(result.data); // Show any error messages returned from the backend
        }
      })
      .catch(err => {
        console.error(err);
        alert("Login failed: " + (err.response ? err.response.data : "Unknown error"));
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type='text'
          placeholder='Enter email'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input 
          type='password' // Use type 'password' for security
          placeholder='Enter Password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type='submit'>
          Log In
        </button> 
      </form>
      <p>Don't have an Account?</p>
      <Link to='/register'>
        Register
      </Link>
    </div>
  );
}

export default Login;
