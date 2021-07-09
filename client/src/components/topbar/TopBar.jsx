import { Link } from 'react-router-dom'
import { useContext  } from 'react'
import { Context } from '../../context/Context';
import './topBar.css'

export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT'});
    };
    
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
                    <li className="topListItem" onClick={handleLogout}>
                    <Link className='link' to='/login'>{user && 'Logout'}</Link>
                    </li>
                </ul>

            </div>
            <div className='topRight'>
            {
                user ? (
                    <img src={user.profilePic} alt="" className="topImage"/>
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
