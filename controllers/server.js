require("dotenv").config();
const express = require("express");
const {connectDB} = require("../database/database.config");
const computersRouter = require("../routes/computers");


class Server {
    constructor(PORT){
        this.PORT = PORT;
        this.app = express();
        this.path = {
            computers:'/computers'
        }

        //DB
        this.dbConnect();
        
        //Midlewares
        this.app.use(express.json());

        //Routes
        this.app.use(this.path.computers,computersRouter);
    }

    listen(){
        this.app.listen(this.PORT,() => {
            console.log(`El server esta corriendo en http://localhost:${this.PORT}`);
        })
    }

    async dbConnect(){
        await connectDB();
    }

}

module.exports = Server;