const router = require("express").Router()
const About = require('../../models/Pages/About')
const Utilisateur = require('../../models/Utilisateur')

router.post('/', async (req, res) => {
    const newAbout = new About(req.body)

    try {
        const savedAbout = await newAbout.save()
        res.status(200).json(savedAbout)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {

    try {
        const about = await About.findById(req.params.id)
        if (about.pseudo === req.body.pseudo) {
            try {
                const updateAbout = await About.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                )
                res.status(200).json(updateAbout)
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
        const about = await About.findById(req.params.id)
        res.status(200).json(about)
    } catch (error) {
        res.status(500).json(err)

    }
})

module.exports = router