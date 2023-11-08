const express = require("express");
require("dotenv").config();
const computersRouter = require("../routes/computers");


class Server {
    constructor(PORT){
        this.PORT = PORT;
        this.app = express();
        this.path = {
            computers:'/computers'
        }
        
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
}

module.exports = Server;