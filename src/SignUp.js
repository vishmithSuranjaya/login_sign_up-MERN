import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {name, email, password}) //passing the data with the url and variables
    .then(result => console.log(result)) //showing the result
    navigate('/login')
    .catch(err => console.log(err)) //if there is an error the ndisplays
  }

  return (
    <div>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
       type="text"
       placeholder='Enter name?'
       autoComplete='off'
       name='name' 
       onChange={(e)=>setName(e.target.value)}
    />

    <label>Email</label>
    <input 
      type='text'
      placeholder='Enter email?'
      name='email'
      onChange={(e)=>setEmail(e.target.value)}
    />

    <label>Password</label>
    <input 
       type='text'
       placeholder='Enter Password?'
       name='password'
       onChange={(e)=>setPassword(e.target.value)}
    />

    <button type='submit'>
        Register
    </button> 
    </form>
    <p>Already Have an Account?</p>
    <Link to='/login'>
        Login
    </Link>
    </div>
  )
}

export default SignUp
