const express = require('express')
const app = express()
const path = require("path")
const bodyParser = require ("body-parser")
const authRoute = require ('./routes/auth')
const photoRoute = require('./routes/photos')
const multer = require("multer")

require("dotenv").config({path:"./.env"})

const connectDB = require('./config/db')
connectDB()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 
app.use("/images", express.static(path.join(__dirname, "/images")))
app.use(express.json())

// créer un stockage des images


app.use('/server/auth', authRoute)
app.use('/server/photos', photoRoute)


app.listen(process.env.PORT || port, () => {
    console.log("Le serveur est connecté sur le port 5000 http://localhost:5000");
})