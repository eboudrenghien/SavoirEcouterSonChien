const router = require("express").Router()
const CoursEssentiel = require('../../models/Formules/CoursEssentiel')
const Identifiant = require('../../models/Identifiant')

router.post('/', async (req, res) => {
    const newCoursEssentiel = new CoursEssentiel(req.body)

    try {
        const savedCoursEssentiel = await newCoursEssentiel.save()
        res.status(200).json(savedCoursEssentiel)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {

    try {
        const coursEssentiel = await CoursEssentiel.findById(req.params.id)
        if (coursEssentiel.pseudo === req.body.pseudo) {
            try {
                const updateCoursEssentiel = await CoursEssentiel.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                )
                res.status(200).json(updateCoursEssentiel)
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
        const coursEssentiel = await CoursEssentiel.findById(req.params.id)
        res.status(200).json(coursEssentiel)
    } catch (error) {
        res.status(500).json(err)

    }
})

module.exports = router