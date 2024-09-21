import React from 'react'
import { Link } from 'react-router-dom'

import './register.css'

const Register = () => {
    return (
        <>
            <div className="container">
                <h1>Register</h1>
                <div className="box">
                    <i className="fa-solid fa-envelope" />
                    <input type="email" name="email" id="email" placeholder="Email/Username" />
                </div>
                <div className="box">
                    <i className="fa-solid fa-key" />
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>
                <button className="btn">Sign Up</button>
                <div>
                    <span className=''>Already have account? <Link className='text-red-500' to='/login'>Register</Link></span>
                </div>
            </div>
        </>
    )
}

export default Register