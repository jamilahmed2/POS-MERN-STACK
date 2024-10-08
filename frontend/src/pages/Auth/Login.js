import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <div className="container">
                <h1>Login</h1>
                <div className="box">
                    <i className="fa-solid fa-envelope" />
                    <input type="email" name="email" id="email" placeholder="Email/Username" />
                </div>
                <div className="box">
                    <i className="fa-solid fa-key" />
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>
                <button className="btn">Sign in</button>
                <div>
                    <span className=''>Don't have account? <Link className='text-red-500' to='/register'>Register</Link></span>
                </div>
            </div>

        </>
    )
}

export default Login