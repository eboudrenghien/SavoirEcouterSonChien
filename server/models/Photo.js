const mongoose = require ('mongoose')

const PhotoSchema = new mongoose.Schema({
    titre : {
        type: String,
        required: true,
    }, 
    photo: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Photo", PhotoSchema)