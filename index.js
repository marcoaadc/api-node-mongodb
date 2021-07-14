const express = require('express')
const app = express()
const PORT = process.env.PORT||3000
const consign = require('consign')

app.use(express.json())

consign().include("./config/database.js").then("./api").then('./config/routes.js').into(app)


app.listen(PORT,()=>{
    console.log("Servidor rodando na porta " + PORT);
})