
class Computer {
    constructor(){
        this.computers = [];
    }


    get_computers(){
        app.get("/computers",(req,res) => {
            this.computers = [1,3,5]
            res.send("Aqui")
         })
    }
}

module.exports = Computer;