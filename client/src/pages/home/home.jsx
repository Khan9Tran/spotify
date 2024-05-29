import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <h3 className="font-bold">Home</h3>
        <Link to="/login" className="font-light">Login</Link><br/>
        <Link to="/register" className="font-medium">Register</Link>
    </div>
  )
}
