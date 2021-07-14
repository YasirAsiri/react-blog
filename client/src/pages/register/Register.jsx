import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './register.css'

export default function Register() {
    const [firstName,setFirstname] = useState('');
    const [lastName,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/auth/register', {
                firstName,
                lastName,
                email,
                password,
            });
            res.data && window.location.replace('/login');

        } catch (err) {
            setError(true);
            console.log(err);
        }
    }

    return (
        <div className='register'>
        <span className="registerTitle">Register</span>
            <div className="registerWrapper">
                <form className="registerForm" onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input 
                        className='registerInput' 
                        type="text" 
                        placeholder='Enter your first name..'
                        onChange={e => setFirstname(e.target.value)}
                        required
                    />
                    <label>Last Name</label>
                    <input 
                        className='registerInput' 
                        type="text" 
                        placeholder='Enter your last name..'
                        onChange={e => setLastname(e.target.value)}
                        required
                    />
                    <label>Email</label>
                    <input 
                        className='registerInput' 
                        type="text" 
                        placeholder='Enter your email address..'
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <label>Password</label>
                    <input 
                        className='registerInput' 
                        type="password" 
                        placeholder='Enter your password..'
                        onChange={e => setPassword(e.target.value)}
                        required
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
