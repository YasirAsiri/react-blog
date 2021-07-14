import { useEffect, useState, useContext } from 'react'
import { Context } from '../../context/Context';
import axios from 'axios'
import { Link } from 'react-router-dom'

import './sidebar.css'

export default function Sidebar() {
    const [cats,setCats] = useState([]);
    const { user } = useContext(Context);
    const PF = 'http://localhost:5000/images/';


    useEffect(() => {
        const getCats = async () =>
        {
            const res = await axios.get('/categories');
            setCats(res.data);
        }
        getCats();

    }, []);
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                { user.profilePic &&
                <img src={PF + user.profilePic} alt="" />
                }
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia beatae laudantium sequi neque repellendus tempora laborum fugiat aliquam culpa? Eligendi, quidem atque cupiditate cum quasi distinctio molestias ab iusto!
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <li key={c._id} className="sidebarListItem">
                            <Link key={c._id} to={`/?cat=${c.name}`} className='link'>
                                {c.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
