import { Link } from 'react-router-dom'
import React, { useRef, useContext  } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'
import './login.css'

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'LOGIN_START'
        });

        try {
            axios.post('/auth/login', {
                email: userRef.current.value,
                password: passwordRef.current.value,
            }).then(function(result) {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: result.data
                })
            });

        } catch {
            dispatch({
                type: 'LOGIN_FAILURE'
            });
        }
    };

    return (
        <div className='login'>
        <span className="loginTitle">Login</span>
            <div className="loginWrapper">
                <form className="loginForm" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input 
                        className='LoginInput' 
                        type="text" 
                        placeholder='Enter your email address..'
                        ref={userRef}
                     />
                    <label>Password</label>
                    <input 
                        className='LoginInput' 
                        type="password" 
                        placeholder='Enter your password..' 
                        ref={passwordRef}
                    />
                    <button className="loginBtn" type='submit' disabled={isFetching}>Login</button>
                </form>
                <button className="loginRegisterBtn">
                    <Link className='link' to='/register'>Register</Link>
                </button>
            </div>
        </div>
    )
}
