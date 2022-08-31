const router = require("express").Router()
const CoursCollectif = require('../../models/Formules/CoursCollectif')
const Identifiant = require('../../models/Identifiant')

router.post('/', async (req, res) => {
    const newCoursCollectif = new CoursCollectif(req.body)

    try {
        const savedCoursCollectif = await newCoursCollectif.save()
        res.status(200).json(savedCoursCollectif)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {

    try {
        const courscollectif = await CoursCollectif.findById(req.params.id)
        if (courscollectif.pseudo === req.body.pseudo) {
            try {
                const updateCoursCollectif = await CoursCollectif.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                )
                res.status(200).json(updateCoursCollectif)
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
        const courscollectif = await CoursCollectif.findById(req.params.id)
        res.status(200).json(courscollectif)
    } catch (error) {
        res.status(500).json(err)

    }
})

module.exports = router