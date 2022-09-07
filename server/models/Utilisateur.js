//Schema pour la base de donnée 
const mongoose = require ('mongoose')

const UtilisateurSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Utilisateur", UtilisateurSchema)