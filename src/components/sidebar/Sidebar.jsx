import './sidebar.css'

export default function Sidebar() {
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
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow us</span>
                <div className="sidebarSocial">
                    <i class="sidebarIcon fab fa-facebook-square"></i>
                    <i class="sidebarIcon fab fa-twitter-square"></i>
                    <i class="sidebarIcon fab fa-pinterest"></i>
                    <i class="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
