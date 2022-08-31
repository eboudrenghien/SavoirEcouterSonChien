const mongoose = require('mongoose')

const PhotoLaMeuteSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: false,
    },
    photo: {
        type: String,
        required: false
    },
    pseudo: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("PhotoLaMeute", PhotoLaMeuteSchema)