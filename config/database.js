const mongoose = require('mongoose')

module.exports= () => {
    mongoose.connect("mongodb://localhost/rpg_fullstack", {useNewUrlParse:true, useUnifiedTopology:true})

    const database = mongoose.connection
    database.on("error", err => console.log(err))
    database.once("open", ()=> console.log("Connected"))
}