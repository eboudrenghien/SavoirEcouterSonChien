const router = require("express").Router()
const Identifiant = require('../../models/Identifiant')
const PhotoSport = require('../../models/Photos/PhotoSport')


// Création post photo

router.post('/Sport', async (req, res) => {
    const newPhotoSport = new PhotoSport(req.body)

    try {
        const savedPhotoSport = await newPhotoSport.save()
        res.status(200).json(savedPhotoSport)
    } catch (err) {
        res.status(500).json(err)
    }
})


//suppression photo

router.delete('/Sport/:id', async (req, res) => {
    try {
        const photoSport = await PhotoSport.findById(req.params.id)
        if (photoSport.pseudo === req.body.pseudo) {
            try {
                await photoSport.delete()
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

router.get('/Sport/:id', async (req, res) => {
    try {
        const photoSport = await PhotoSport.findById(req.params.id)
        res.status(200).json(photoSport)
    } catch (error) {
        res.status(500).json(err)
        
    }
})

module.exports = router