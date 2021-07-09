import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './register.css'

export default function Register() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/auth/register', {
                username,
                email,
                password,
            });
            res.data && window.location.replace('/login');
            console.log(res);

        } catch (error) {
            setError(true);
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log('ErrorCode: ' + error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
        }
    }

    return (
        <div className='register'>
        <span className="registerTitle">Register</span>
            <div className="registerWrapper">
                <form className="registerForm" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input 
                        className='registerInput' 
                        type="text" 
                        placeholder='Enter your username..'
                        onChange={e => setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input 
                        className='registerInput' 
                        type="text" 
                        placeholder='Enter your email address..'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                        className='registerInput' 
                        type="password" 
                        placeholder='Enter your password..'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="registerBtn" type='submit'>register</button>
                </form>
                <button className="registerLoginBtn">
                    <Link className='link' to='/login'>Login</Link>
                </button>
                {error && <span style={{color:"red"}}>Something went wrong!</span>}
            </div>
        </div>
    )
}
