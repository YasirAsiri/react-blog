import { Link } from 'react-router-dom'
import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img src="https://smoothmove.co.za/wp-content/uploads/2021/02/pp1-660x371.jpg" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    <Link className='link' to='/post/45'>Lorem ipsum, dolor sit amet</Link>
                </span>
                <span className="postDate">
                    1 hour ago
                </span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta explicabo illum magnam tempore ipsum. Quam adipisci nemo sit quo necessitatibus distinctio quasi architecto, est in. Praesentium soluta commodi incidunt voluptatibus.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta explicabo illum magnam tempore ipsum. Quam adipisci nemo sit quo necessitatibus distinctio quasi architecto, est in. Praesentium soluta commodi incidunt voluptatibus.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta explicabo illum magnam tempore ipsum. Quam adipisci nemo sit quo necessitatibus distinctio quasi architecto, est in. Praesentium soluta commodi incidunt voluptatibus.
            </p>
        </div>
    )
}
