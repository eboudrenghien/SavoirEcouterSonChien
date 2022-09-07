const router = require("express").Router()
const Utilisateur = require('../../models/Utilisateur')
const PhotoLesEleves = require('../../models/Photos/PhotoLesEleves')


// Création post photo

router.post('/LesEleves', async (req, res) => {
    const newPhotoLesEleves = new PhotoLesEleves(req.body)

    try {
        const savedPhotoLesEleves = await newPhotoLesEleves.save()
        res.status(200).json(savedPhotoLesEleves)
    } catch (err) {
        res.status(500).json(err)
    }
})


//suppression photo

router.delete('/LesEleves/:id', async (req, res) => {
    try {
        const photoLesEleves = await PhotoLesEleves.findById(req.params.id)
        if (photoLesEleves.pseudo === req.body.pseudo) {
            try {
                await photoLesEleves.delete()
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

router.get('/LesEleves/:id', async (req, res) => {
    try {
        const photoLesEleves = await PhotoLesEleves.findById(req.params.id)
        res.status(200).json(photoLesEleves)
    } catch (error) {
        res.status(500).json(err)
        
    }
})

module.exports = router