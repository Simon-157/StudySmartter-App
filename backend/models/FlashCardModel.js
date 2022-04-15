const mongoose = require("mongoose");
const Schema = mongoose.Schema

const FlashCardSchema = new Schema({
    title:{
        type:"string",
        
    },
    description: {
        type:"string",
        
    },

    visibility: {
        type:"string",
        

    },

    cards: {
        type:"array",
    }
})


const FlashCard = mongoose.model("FlashCard", FlashCardSchema)
module.exports = FlashCard;

