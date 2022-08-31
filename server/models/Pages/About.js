const mongoose = require('mongoose')

const AboutSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    pseudo: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("About", AboutSchema)