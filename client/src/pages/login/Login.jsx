import { Link } from 'react-router-dom'
import React, { useRef, useContext, useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'
import './login.css'

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const [error, setError] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({
            type: 'LOGIN_START'
        });

        try {
            const res = await axios.post('/auth/login', {
                email: userRef.current.value,
                password: passwordRef.current.value,
            });

            if (res.data.email) {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: res.data
                });
            } else if (res.data.error) {
                setError(res.data.message);
                dispatch({
                    type: 'LOGIN_FAILURE'
                });
            }

        } catch (err) {
            setError(err);
            dispatch({
                type: 'LOGIN_FAILURE'
            });
            console.log(err);
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
                        type="email"
                        placeholder='Enter your email address..'
                        ref={userRef}
                        required
                    />
                    <label>Password</label>
                    <input
                        className='LoginInput'
                        type="password"
                        placeholder='Enter your password..'
                        ref={passwordRef}
                        required
                    />
                    <button className="loginBtn" type='submit' disabled={isFetching}>Login</button>
                </form>
                <button className="loginRegisterBtn">
                    <Link className='link' to='/register'>Register</Link>
                </button>
                {error && <span style={{ color: "red", marginTop: "10px" }}>{error}</span>}
            </div>
        </div>
    )
}
