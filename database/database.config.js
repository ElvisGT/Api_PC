const mongoose = require("mongoose");
const dbport = process.env.DB_URI;


const connectDB = async() => {
    try{

        await mongoose.connect(dbport);
        console.log("Base de datos conectada correctamente");
    }catch(err){
        console.log("Ha ocurrido un error al conectar la base de datos");
    }

}
module.exports = {connectDB};