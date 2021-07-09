import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {
    const [cats,setCats] = useState([]);

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
                <img src="https://smoothmove.co.za/wp-content/uploads/2021/02/pp1-660x371.jpg" alt="" />
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia beatae laudantium sequi neque repellendus tempora laborum fugiat aliquam culpa? Eligendi, quidem atque cupiditate cum quasi distinctio molestias ab iusto!
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link key={c._id} to={`/?cat=${c.name}`} className='link'>
                            <li key={c._id} className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow us</span>
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
