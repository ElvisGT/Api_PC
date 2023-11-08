const express = require("express");
const computersRouter = require("../routes/computers");


class Server {
    constructor(PORT){
        this.PORT = PORT;
        this.app = express();
        

        //Routes
        this.app.use("/",computersRouter);
    }

    listen(){
        this.app.listen(this.PORT,() => {
            console.log(`El server esta corriendo en http://localhost:${this.PORT}`);
        })
    }
}

module.exports = Server;