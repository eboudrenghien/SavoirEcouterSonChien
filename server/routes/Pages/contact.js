const router = require("express").Router()
const Contact = require('../../models/Pages/Contact')
const Identifiant = require('../../models/Identifiant')

router.post('/', async (req, res) => {
    const newContact = new Contact(req.body)

    try {
        const savedContact = await newContact.save()
        res.status(200).json(savedContact)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {

    try {
        const contact = await Contact.findById(req.params.id)
        if (contact.pseudo === req.body.pseudo) {
            try {
                const updateContact = await Contact.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                )
                res.status(200).json(updateContact)
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
        const contact = await Contact.findById(req.params.id)
        res.status(200).json(contact)
    } catch (error) {
        res.status(500).json(err)

    }
})

module.exports = router