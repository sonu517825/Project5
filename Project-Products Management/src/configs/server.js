const express = require("express")
const app = express()
const route = require("../routes/route")
const multer = require("multer")


const server = async function callback() {
    try {


        app.use(express.json({ extended: true }))
        app.use(express.urlencoded({ extended: true }))
        app.use(multer().any())
        app.use('/', route);


        const PORT = process.env.PORT || 3000


        app.listen(PORT, function callback(err) {
            if (err) console.log(err)
            console.log("Server listening on Port", PORT)
        })
    }


    catch (err) {
        console.log(err)
        process.exit(1)
    }
}


module.exports.server = server


