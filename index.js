const express = require("express");
const app = express();

app.listen(3000,() => {
    console.log(`El servidor esta corriendo en el puerto ${3000}`);
})

app.get("/",(req,res) => {
    res.send("Ha entrado");
})