const express = require('express')
const app = express()
const path = require("path")
const bodyParser = require ("body-parser")
require("dotenv").config({path:"./.env"})
const multer = require("multer")

// route authentification
const authRoute = require ('./routes/auth')

// routes albums photos
const laMeuteRoute = require('./routes/Photos/laMeute')
const sportRoute = require('./routes/Photos/Sport')
const lesElevesRoute = require ('./routes/Photos/lesEleves')
const collectifsRoute = require ('./routes/Photos/AlbumCollectifs')

// routes pages
const accueilRoute = require('./routes/Pages/accueil')
const tarifsRoute = require('./routes/Pages/tarifs')

//formules
const stageintensifRoute = require('./routes/Formules/stageintensif')
const septjoursRoute = require('./routes/Formules/septjours')
const coursessentielsRoute = require('./routes/Formules/coursessentiels')
const courscollectifsRoute = require('./routes/Formules/courscollectifs')
const attestationRoute = require('./routes/Formules/attestation')

const connectDB = require('./config/db')
connectDB()

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public")); 
// app.use("/images", express.static(path.join(__dirname, "/images")))

//permet de lire les fichiers JSON
app.use(express.json())

// créer un stockage des images
// la demande, le fichier, et le callback( rappel) destination "images"
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "images")
    }, filename:(req, file, cb) => {
        cb(null, "laMeutes.jpg")
    }
})

const upload = multer({storage:storage})
app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("La photo a bien été téléchargée.")
})

app.use('/auth', authRoute)

// albums photos
app.use('/albums-photos', laMeuteRoute)
app.use('/albums-photos', sportRoute)
app.use('/albums-photos', lesElevesRoute)
app.use('/albums-photos', collectifsRoute)

//pages
app.use('/accueil', accueilRoute)
app.use('/tarifs', tarifsRoute)

//formules
app.use('/formules/stage-intensif', stageintensifRoute)
app.use('/formules/sept-jours', septjoursRoute)
app.use('/formules/cours-essentiels', coursessentielsRoute)
app.use('/formules/cours-collectifs', courscollectifsRoute)
app.use('/formules/attestation', attestationRoute)

app.listen(process.env.PORT || port, () => {
    console.log("Le serveur est connecté sur le port 5000 http://localhost:5000/");
})