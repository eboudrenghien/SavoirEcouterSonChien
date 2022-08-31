const router = require("express").Router()
const Identifiant = require('../../models/Identifiant')
const PhotoLaMeute = require('../../models/Photos/PhotoLaMeute')


// Création post photo

router.post('/LaMeute', async (req, res) => {
    const newPhotoLaMeute = new PhotoLaMeute(req.body)

    try {
        const savedPhotoLaMeute = await newPhotoLaMeute.save()
        res.status(200).json(savedPhotoLaMeute)
    } catch (err) {
        res.status(500).json(err)
    }
})


//suppression photo

router.delete('/LaMeute/:id', async (req, res) => {
    try {
        const photoLaMeute = await PhotoLaMeute.findById(req.params.id)
        if (photoLaMeute.pseudo === req.body.pseudo) {
            try {
                await photoLaMeute.delete()
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

router.get('/LaMeute/:id', async (req, res) => {
    try {
        const photoLaMeute = await PhotoLaMeute.findById(req.params.id)
        res.status(200).json(photoLaMeute)
    } catch (error) {
        res.status(500).json(err)
        
    }
})

module.exports = router