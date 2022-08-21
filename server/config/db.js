const mongoose = require ('mongoose')
require("dotenv").config({path:"./.env"})
const authRoute = require('../routes/auth')


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URL_API, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('La connexion à la base de données a été réalisé avec succès !');
    } catch (err) {
        console.log(err, "La tentative de connexion a échoué, veuillez vérifier vos paramètres.");
    }
}

module.exports = connectDB