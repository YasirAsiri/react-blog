import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                        src="https://www.esc.nsw.gov.au/__data/assets/image/0003/167043/varieties/bannerLrg.jpg" 
                        alt=""
                        />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fas fa-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display:'none'}} />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Yasir788' />
                    <label htmlFor="">Enail</label>
                    <input type="email" placeholder='Yasir@email.com' />
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
