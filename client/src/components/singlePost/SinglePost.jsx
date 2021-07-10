import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useContext  } from 'react'
import { Context } from '../../context/Context';
import './singlePost.css'

export default function SinglePost() {
    const { pathname } = useLocation();
    const postID = pathname.split('/')[2];
    const [post, setPost] = useState({});
    const PF = 'http://localhost:5000/images/';
    const { user } = useContext(Context);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/posts/' + postID);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    }, [postID]);

    const handleDelete = async ()=> {
        try {
            await axios.delete(`/posts/${postID}`, {
                data: { username: user.username },
            });
            window.location.replace('/');
        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = async ()=> {
        try {
            await axios.put(`/posts/${postID}`, {
                username: user.username, title, desc
            });
            setUpdateMode(false);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {post.photo && 
                    <img src={PF + post.photo} alt="" className="singlePostImg" />
                }
                { updateMode ? 
                    <input 
                        type='text' 
                        className="singlePostTitleInput" 
                        autoFocus value={title}
                        onChange={(e)=>setTitle(e.target.value)} 
                        >

                    </input> : 
                    <h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username &&
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                        </div>
                        }
                    </h1>
                }
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author:
                    <Link to={`/?user=${post.username}`} className='link'>
                    <b>{post.username}</b>
                    </Link>
                    </span>
                    <span className="singlePostDate">{new Date (post.createdAt).toDateString()}</span>
                </div>
                { updateMode ? (
                    <textarea 
                        className='singlePostDescInput' 
                        value={desc}
                        onChange={(e)=>setDesc(e.target.value)}
                    />
                    
                ) : (
                    <p className='singlePostDesc'>
                        {desc}
                    </p>
                )}
                { updateMode &&
                    <button className='singlePostUpdateBtn' onClick={handleUpdate}>Update</button>
                }
            </div>
        </div>
    );
}
