const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoriesRoute = require('./routes/categories');
const multer = require('multer');
const path = require('path');



dotenv.config();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname,'/images')));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'images');
    },
    filename: (req,file,cb) => {
        cb(null, req.body.name);
    },
});

const limits = { fileSize: 25 * 1024 * 1024 };
const upload = multer({storage, limits});
app.post('/api/upload', upload.single('imageInput'),(req,res) => {
    res.status(200).json('File has been uploaded successfully.');
})

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoriesRoute);





app.listen('5000', () => {
    console.log('Server is up and running...');
});