const mongoose = require ('mongoose')
require("dotenv").config({path:"./.env"})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URL_API, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('La connexion à la base de données a été réalisé avec succès !');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB