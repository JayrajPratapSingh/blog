import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
const Login = () => {

    

    return (
        <div className='container'>
            <h1>Log In</h1>
            <form action="" method="POST">
                <label >Email</label>
                <br />
                <input type="email" name="email" placeholder='enter email..'/>
                <br />
                <label>Password</label>
                <br />
                <input type="password" name="password" placeholder='enter password..'/>
                <br />
                <input type="submit" value="Login" className='btn'/>
                <br />
                Or
                <Link to="/register" className='r-btn'>Register</Link>
                
            </form>
        </div>
    )
}

export default Login
