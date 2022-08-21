const express = require('express')
const path = require("path")
const bodyParser = require ("body-parser")
require("dotenv").config({path:"./.env"})

const connectDB = require('./config/db')
connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send("Bonjour")
})

app.listen(process.env.PORT || port, () => {
    console.log("Le serveur est connecté sur le port 5000 http://localhost:5000");
})