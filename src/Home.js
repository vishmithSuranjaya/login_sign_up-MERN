import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to='/login' className='form-btn'>Log out</Link>
    </div>
  )
}

export default Home
