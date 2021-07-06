import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://news.harvard.edu/wp-content/uploads/2020/03/Zoom_Background_002-1350x900.jpg" alt="" className="headerImg" />
        </div>
    )
}
