const mongoose = require('mongoose')

const TarifSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    pseudo: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("Tarif", TarifSchema)