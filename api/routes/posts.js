const router = require('express').Router();
const Post = require('../models/Post');

//create a new post
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update post by id
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        try {
            const updatedPost = await Post.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedPost);
        } catch (err) {
            res.status(500).json(err);
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

// delete post
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.author.email === req.body.email) {
            try {
                await post.delete()
                res.status(200).json('Post has been deleted successfully.');
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json('Permission denied.');
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

    // const userID = req.query.userID;
    const categoryName = req.query.cat;
    const userID = req.query.userID;

    try {
        let posts;
        if (userID) {
            posts = await Post.find({ author_id: userID });
        } else if (categoryName) {
            posts = await Post.find({
                categories: {
                    $in: [categoryName]
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