const router = require("express").Router()
const Stageintensif = require('../../models/Formules/Stageintensif')
const Identifiant = require('../../models/Identifiant')

router.post('/', async (req, res) => {
    const newStageintensif = new Stageintensif(req.body)

    try {
        const savedStageintensif = await newStageintensif.save()
        res.status(200).json(savedStageintensif)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {

    try {
        const stageintensif = await Stageintensif.findById(req.params.id)
        if (stageintensif.pseudo === req.body.pseudo) {
            try {
                const updateStageintensif = await Stageintensif.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                )
                res.status(200).json(updateStageintensif)
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
        const stageintensif = await Stageintensif.findById(req.params.id)
        res.status(200).json(stageintensif)
    } catch (error) {
        res.status(500).json(err)

    }
})

module.exports = router