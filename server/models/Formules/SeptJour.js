const mongoose = require('mongoose')

const SeptJourSchema = new mongoose.Schema({
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

module.exports = mongoose.model("SeptJour", SeptJourSchema)