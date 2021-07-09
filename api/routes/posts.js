const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const { findById } = require('../models/User');


//create a new post
router.post('/', async (req,res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update post
router.put('/:id', async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, 
                {
                    $set: req.body,
                },
                { new: true}
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else  {
            res.status(401).json('Permission denied.')
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

// delete post
router.delete('/:id', async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete()
                res.status(200).json('Post has been deleted successfully.');
            } catch (err) {
                res.status(500).json(err);
            }
        } else  {
            res.status(401).json('Permission denied.')
        }

    } catch (err) {
        res.status(500).json(err);
    }
});



// get post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
        
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all posts
router.get('/', async (req, res) => {
    const username = req.query.user;
    const categoryName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (categoryName) {
            posts = await Post.find({
                categories:{
                    $in:[categoryName]
                },
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
        
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router