const router = require("express").Router()
const Tarif = require('../../models/Pages/Tarif')
const Utilisateur = require('../../models/Utilisateur')

router.post('/', async (req, res) => {
    const newTarif = new Tarif(req.body)

    try {
        const savedTarif = await newTarif.save()
        res.status(200).json(savedTarif)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/', async (req, res) => {

    try {
        const tarif = await Tarif.findById(req.params.id)
        if (tarif.pseudo === req.body.pseudo) {
            try {
                const updateTarif = await Tarif.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                )
                res.status(200).json(updateTarif)
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("Vous n'avez pas les permissions pour modifier ces tarifs.")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})


//suppression photo

router.delete('/', async (req, res) => {
    try {
        const tarif = await Tarif.findById(req.params.id)
        if (tarif.pseudo === req.body.pseudo) {
            try {
                await tarif.delete()
                res.status(200).json("Le tarif a bien été supprimé")
            } catch (error) {
                res.status(500).json(err)

            }
        } else {
            res.status(401).json("Vous n'avez pas les permissions pour modifier ces tarifs.")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})



router.get('/', async (req, res) => {
    try {
        let tarifs
        tarifs = await Tarif.find()
        res.status(200).json(tarifs)
    } catch (error) {
        res.status(500).json(err)
    }
})

module.exports = router