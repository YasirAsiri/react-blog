import { useContext, useState } from 'react'
import axios from 'axios'
import './write.css'
import { Context } from '../../context/Context';

export default function Write() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            author_id: user._id,
            title,
            desc,
        };

        if (file) {
            const data = new FormData();
            const fileName = Date.now() + '-' + file.name;
            data.append('name', fileName);
            data.append('imageInput', file);
            newPost.photo = fileName;

            try {
                await axios.post('/upload', data);
            } catch (err) {

            }
        } else {

            const data = new FormData();
            const fileName = Date.now() + '-' + Math.random().toString(36).substring(7) + '.jpg';
            const response = await fetch(document.getElementById('postImage').getAttribute("src"));
            const fileData = await response.blob();
            const metadata = {
                type: 'image/jpeg'
            };

            const myFile = new File([fileData], "test.jpg", metadata);
            data.append('name', fileName);
            data.append('imageInput', myFile);
            newPost.photo = fileName;

            try {
                await axios.post('/upload', data);

            } catch (err) {
                console.log(err);
            }
        }

        try {
            const res = await axios.post('/posts', newPost);
            window.location.replace('/post/' + res.data._id);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='write'>
            <img
                id="postImage"
                src={file ? URL.createObjectURL(file) : "https://picsum.photos/1000/250"}
                crossOrigin="anonymous"
                alt=""
                className="writeImg"
            />

            <form action="" onSubmit={handleSubmit} className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="imageInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        id="imageInput"
                        style={{ display: 'none' }}
                        onChange={e => setFile(e.target.files[0])}
                    />
                    <input
                        type="text"
                        id="textInput"
                        className='writeInput'
                        placeholder='Title'
                        autoFocus={true}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder='Tell your story...'
                        type='text'
                        className='writeInput writeText'
                        onChange={e => setDesc(e.target.value)}
                    >
                    </textarea>
                </div>
                <button type='submit' className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
