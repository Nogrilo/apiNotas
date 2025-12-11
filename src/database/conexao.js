const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        //Tenta conectar ao mongodb usando a url armazenada na varíavel de ambiente MONGO_URI
        console.log("Conectado ao Mongo DB")
    } catch (error) {
        console.log("Erro de conexão",error.message);
    }
}

module.exports = connectDb;