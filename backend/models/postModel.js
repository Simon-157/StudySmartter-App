const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var PostSchema = new Schema({
    title:{
        type: String,
        required: true
    }
    
})

var Post = mongoose.model("Posts", PostSchema)

module.exports = Post