const router = require("express").Router()
const Identifiant = require('../../models/Identifiant')
const PhotoCollectif = require('../../models/Photos/PhotoCollectif')


// Création post photo

router.post('/AlbumCollectifs', async (req, res) => {
    const newPhotoCollectif = new PhotoCollectif(req.body)

    try {
        const savedPhotoCollectif = await newPhotoCollectif.save()
        res.status(200).json(savedPhotoCollectif)
    } catch (err) {
        res.status(500).json(err)
    }
})


//suppression photo

router.delete('/AlbumCollectifs/:id', async (req, res) => {
    try {
        const photoCollectif = await PhotoCollectif.findById(req.params.id)
        if (photoCollectif.pseudo === req.body.pseudo) {
            try {
                await photoCollectif.delete()
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

router.get('/AlbumCollectifs/:id', async (req, res) => {
    try {
        const photoCollectif = await PhotoCollectif.findById(req.params.id)
        res.status(200).json(photoCollectif)
    } catch (error) {
        res.status(500).json(err)
        
    }
})

module.exports = router