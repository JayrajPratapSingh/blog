import React from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css"
const Nav = () => {
    return (
        <div className="nav-container">
            <h2 className='blog-app'>Blog App</h2>
            <div className='middle'>
               <span> <Link to="/home">Home</Link></span>
                
                <span><Link to="/create">Create</Link></span>
            </div>
            <div className="log-out">
                <Link to="/">LogOut</Link>
            </div>
        </div>
    )
}

export default Nav
