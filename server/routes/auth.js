const router =  require("express").Router()
const  Utilisateur = require('../models/Utilisateur')
const bcrypt = require ("bcryptjs")
// Enregistrement
router.post("/senregistrer", async (req, res) => {
    try {
        const salt = await bcrypt.genSaltSync(10)
        const hash = await bcrypt.hashSync(req.body.mdp, salt)
        const newUtilisateur= new Utilisateur({
            pseudo: req.body.pseudo,
            mdp: hash
        })
        const utilisateur = await newUtilisateur.save()
        res.status(200).json(utilisateur)
    } catch (err) {
        res.status(500).json(err)
    }
})
// Connexion 

router.post("/connexion", async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findOne({pseudo: req.body.pseudo})
        !utilisateur && res.status(400).json("Vous ne pouvez pas vous connecter.")

        const validation = await bcrypt.compareSync(req.body.mdp, utilisateur.mdp)
        !validation && res.status(400).json("Vous ne pouvez pas vous connecter.")

        
        res.status(200).json(utilisateur)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router