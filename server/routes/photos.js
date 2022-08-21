const router = require("express").Router()
const Identifiant = require('../models/Identifiant')
const Photo = require('../models/Photo')


// Création post photo

router.post('/albums-photos', async (req, res) => {
    const newPhoto = new Photo(req.body)

    try {
        const savedPhoto = await newPhoto.save()
        res.status(200).json(savedPhoto)
    } catch (err) {
        res.status(500).json(err)
    }
})


//suppression photo

router.delete('/albums-photos/:id', async (req, res) => {
    try {
        const photo = await Photo.findById(req.params.id)
        if (photo.email === req.body.email) {
            try {
                await photo.delete()
                res.status(200).json("La photo a bien été supprimé")
            } catch (error) {
                res.status(500).json(err)

            }
        } else {
            res.status(401).json("Vous ne pouvez pas supprimer cette photo.")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})


// voir une photo

router.get('/albums-photos/:id', async (req, res) => {
    try {
        const photo = await Photo.findById(req.params.id)
        res.status(200).json(photo)
    } catch (error) {
        res.status(500).json(err)
        
    }
})

module.exports = router