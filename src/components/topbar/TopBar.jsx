import './topBar.css'

export default function TopBar() {
    return (
        <div className="top">
            <div className='topLeft'>
                <i class="topIcon fab fa-facebook-square"></i>
                <i class="topIcon fab fa-twitter-square"></i>
                <i class="topIcon fab fa-pinterest"></i>
                <i class="topIcon fab fa-instagram-square"></i>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Logout</li>
                </ul>

            </div>
            <div className='topRight'>
            <img src="https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg" alt="" className="topImage"/>
            <i class="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
