const router = require("express").Router()
const Attestation = require('../../models/Formules/Attestation')
const Identifiant = require('../../models/Identifiant')

router.post('/', async (req, res) => {
    const newAttestation = new Attestation(req.body)

    try {
        const savedAttestation = await newAttestation.save()
        res.status(200).json(savedAttestation)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {

    try {
        const attestation = await Attestation.findById(req.params.id)
        if (attestation.pseudo === req.body.pseudo) {
            try {
                const updateAttestation = await Attestation.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                )
                res.status(200).json(updateAttestation)
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
        const attestation = await Attestation.findById(req.params.id)
        res.status(200).json(attestation)
    } catch (error) {
        res.status(500).json(err)

    }
})

module.exports = router