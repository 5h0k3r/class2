const mongoose = require('mongoose')
require('dotenv').config({ path: ".env" })

const DB = async () => {
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true
        })
        console.log("Conexion Exitosa")
    }catch (error) {
        console.log("Hubo un error")
        console.log(error)
        console.exit(1)
    }
}

module.exports = DB