import { Link } from 'react-router-dom'
import './post.css'

export default function Post({post}) {

    const PF = 'http://localhost:5000/images/';
    return (
        <div className='post'>
            {post.photo && (
                <img src={PF + post.photo} alt="" className="postImg" />
            )}
            <div className="postInfo">
                <div className="postCats">
                {post.categories.map((c) => (
                    <span className="postCat">{c.name}</span>
                ))}
                </div>
                
                <Link className='link' to={`/post/${post._id}`}>
                <span className="postTitle">{post.title}</span>
                </Link>
                
                <span className="postDate">
                {new Date (post.createdAt).toDateString()}
                </span>
            </div>
            <p className="postDesc">
            {post.desc}
            </p>
        </div>
    )
}
