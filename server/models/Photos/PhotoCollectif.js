const mongoose = require('mongoose')

const PhotoCollectifSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
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
    { timestamps: true}
)

module.exports = mongoose.model("PhotoCollectif", PhotoCollectifSchema)