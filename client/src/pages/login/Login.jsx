import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
        <div className='login'>
        <span className="loginTitle">Login</span>
            <div className="loginWrapper">
                <form className="loginForm">
                    <label>Email</label>
                    <input className='LoginInput' type="text" placeholder='Enter your email address..' />
                    <label>Password</label>
                    <input className='LoginInput' type="password" placeholder='Enter your password..' />
                    <button className="loginBtn">Login</button>
                </form>
                <button className="loginRegisterBtn">
                    <Link className='link' to='/register'>Register</Link>
                </button>
            </div>
        </div>
    )
}
