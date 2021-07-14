import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { useContext, useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context';

export default function Settings() {

    const {user, dispatch} = useContext(Context);
    const [file, setFile] = useState(null);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.LastName);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [successUpdate, setSuccessUpdate] = useState(false);
    const PF = 'http://localhost:5000/images/';



    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: 'UPDATE_START'});
        const updatedUser = {
            userId: user._id,
            firstName,
            lastName,
            email,
            password, 
        };

        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append('name', fileName);
            data.append('imageInput', file);
            updatedUser.profilePic = fileName;

            try {
                await axios.post('/upload', data);
            } catch (err) {
                console.log(err);
            }
        }

        try {
            const res = await axios.put(`/users/${user._id}`, updatedUser);
            dispatch({type: 'UPDATE_SUCCESS', payload: res.data});
            setSuccessUpdate(true);
            window.location.replace('/settings');

        } catch (err) {
            dispatch({type: 'UPDATE_FAILURE'});
        }
    }


    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm" onSubmit={handleSubmit}>
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                        src={file ? URL.createObjectURL(file) : user.profilePic ? PF + user.profilePic : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
                        alt=""
                        />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fas fa-user"></i>
                        </label>
                        <input 
                            type="file" 
                            id='fileInput'
                            style={{display:'none'}} 
                            onChange={e=>setFile(e.target.files[0])}
                        />
                    </div>
                    <label htmlFor="">First Name</label>
                    <input type="text" id="firstName" placeholder={user.firstName} onChange={e=>setFirstName(e.target.value)} />
                    <label htmlFor="">Last Name</label>
                    <input type="text" id="lastName" placeholder={user.lastName} onChange={e=>setLastName(e.target.value)} />
                    <label htmlFor="">Email</label>
                    <input type="email" id="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)} />
                    <label htmlFor="">Password</label>
                    <input type="password" id="password" onChange={e=>setPassword(e.target.value)} />
                    <button className="settingsSubmit" type="submit">Update</button>
                    { successUpdate &&
                        <span 
                        className="successMsg"
                        style={{color: "green", textAlign: "center", marginTop: "20px"}}
                        >
                            User information was succefully updated.
                        </span>
                    }
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
