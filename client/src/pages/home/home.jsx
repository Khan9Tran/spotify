import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <h3>Home</h3>
        <Link to="/login">Login</Link><br/>
        <Link to="/register">Register</Link>
    </div>
  )
}
