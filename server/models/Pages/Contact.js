const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
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
},
    { timestamps: true }
)

module.exports = mongoose.model("Contact", ContactSchema)