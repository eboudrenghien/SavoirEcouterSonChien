const router = require("express").Router()
const Accueil = require('../../models/Pages/Accueil')
const Utilisateur = require('../../models/Utilisateur')

router.post('/', async (req, res) => {
    const newAccueil = new Accueil(req.body)

    try {
        const savedAccueil = await newAccueil.save()
        res.status(200).json(savedAccueil)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/', async (req, res) => {

    try {
        const accueil = await Accueil.findOneAndUpdate()
        if (accueil.pseudo === req.body.pseudo) {
            try {
                const updateAccueil = await Accueil.findOneAndUpdate(
                    {
                        $set: req.body,
                    },
                    { new: true }
                )
                res.status(200).json(updateAccueil)
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("Vous n'avez pas les permissions pour modifier cet article.")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get('/', async (req, res) => {
    try {
        let accueil
        accueil= await Accueil.find()
        res.status(200).json(accueil)
    } catch (error) {
        res.status(500).json(err)

    }
})

module.exports = router