const router =  require("express").Router()
const Identifiant = require('../models/Identifiant')
const bcrypt = require ("bcryptjs")
// Enregistrement
router.post("/senregistrer", async (req, res) => {
    try {
        const salt = await bcrypt.genSaltSync(10)
        const hash = await bcrypt.hashSync(req.body.mdp, salt)
        const newIdentifiant = new Identifiant ({
            pseudo: req.body.pseudo,
            mdp: hash
        })
        const identifiant = await newIdentifiant.save()
        res.status(200).json(identifiant)
    } catch (err) {
        res.status(500).json(err)
    }
})
// Connexion 

router.post("/connexion", async (req, res) => {
    try {
        const identifiant = await Identifiant.findOne({pseudo: req.body.pseudo})
        !identifiant && res.status(400).json("Vous ne pouvez pas vous connecter.")

        const validation = await bcrypt.compareSync(req.body.mdp, identifiant.mdp)
        !validation && res.status(400).json("Vous ne pouvez pas vous connecter.")

        
        res.status(200).json(identifiant)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router