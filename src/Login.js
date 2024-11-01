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
    <div className='content'>
    <div className='form-content'>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>

    <div className='form-fields'>
    <label>Email</label>
    <input 
      type='text'
      placeholder='Enter email?'
      name='email'
      onChange={(e)=>setEmail(e.target.value)}
    />
    </div>

    <div className='form-fields'>
    <label>Password</label>
    <input 
       type='text'
       placeholder='Enter Password?'
       name='password'
       onChange={(e)=>setPassword(e.target.value)}
    />
    </div>

    <button type='submit' className='form-btn'>
        Login
    </button> 
    </form>
    <p>Already Have an Account?</p>
    <Link to='/register'>
        Register
    </Link>
    </div>
    </div>
  );
}

export default Login;
