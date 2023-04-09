import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    image: String,
    username: String,
    time: String,
    replies: Number,
    retuits: Number,
    dislikes: Number,
    disliked: Boolean,
    handle: String,

}, {collection: 'tuits'});

export default schema;

