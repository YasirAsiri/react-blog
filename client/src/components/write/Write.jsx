import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <img 
            src="https://www.esc.nsw.gov.au/__data/assets/image/0003/167043/varieties/bannerLrg.jpg" 
            alt="" 
            className="writeImg" 
            />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput"  style={{display:'none'}} />
                    <input type="text" id="textInput" className='writeInput' placeholder='Title' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                <textarea
                    placeholder='Tell your story...'
                    type='text'
                    className='writeInput writeText'
                >
                </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
