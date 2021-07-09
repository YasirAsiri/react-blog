import { Link } from 'react-router-dom'
import './topBar.css'

export default function TopBar() {
    const user = false
    return (
        <div className="top">
            <div className='topLeft'>
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className="topListItem">
                    <Link className='link' to='/'>Home</Link>
                    </li>
                    <li className="topListItem">
                    <Link className='link' to='/'>About</Link>
                    </li>
                    <li className="topListItem">
                    <Link className='link' to='/'>Contact</Link>
                    </li>
                    <li className="topListItem">
                    <Link className='link' to='/write'>Write</Link>
                    </li>
                    <li className="topListItem">
                    <Link className='link' to='/'>{user && 'Logout'}</Link>
                    </li>
                </ul>

            </div>
            <div className='topRight'>
            {
                user ? (
                    <img src="https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg" alt="" className="topImage"/>
                ) : (
                    <ul className='topList'>
                        <li className="topListItem">
                            <Link className='link' to='/login'>Login</Link>
                        </li>
                        <li className="topListItem">
                            <Link className='link' to='/register'>Register</Link>
                        </li>
                    </ul>
                )
            }
            <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
