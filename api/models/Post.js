const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    desc: {
        type :String,
        required: true,
    },
    photo: {
        type: String,
        required: false
    },
    author_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    categories:{
        type: Array,
        required: false,
    },

}, { timestamps: true}

);

module.exports = mongoose.model("Post", PostSchema);