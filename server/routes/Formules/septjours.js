const router = require("express").Router()
const SeptJour = require('../../models/Formules/SeptJour')
const Utilisateur = require('../../models/Utilisateur')

router.post('/', async (req, res) => {
    const newSeptJour = new SeptJour(req.body)

    try {
        const savedSeptJour = await newSeptJour.save()
        res.status(200).json(savedSeptJour)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {

    try {
        const septjour = await SeptJour.findById(req.params.id)
        if (septjour.pseudo === req.body.pseudo) {
            try {
                const updateSeptJour = await SeptJour.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                )
                res.status(200).json(updateSeptJour)
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


router.get('/:id', async (req, res) => {
    try {
        const septjour = await SeptJour.findById(req.params.id)
        res.status(200).json(septjour)
    } catch (error) {
        res.status(500).json(err)

    }
})

module.exports = router