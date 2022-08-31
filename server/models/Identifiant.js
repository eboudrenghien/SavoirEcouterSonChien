//Schema pour la base de donnée 
const mongoose = require ('mongoose')

const IdentifiantSchema = new mongoose.Schema({
    pseudo : {
        type: String,
        required: true,
        unique: true
    }, 
    mdp: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Identifiant", IdentifiantSchema)