const Computer = require("../models/Computer");

const getComputers = async(req,res) => {
    const computers = await Computer.find({});
    res.json({
        msg:"OK",
        computers
    })
}

const getComputerByID = async(req,res) =>{
    const {id} = req.params;

    const computer = await Computer.findById(id);

    res.json({
        msg:"OK",
        computer
    })
}

const updateComputer = async(req,res) => {
    const {id} = req.params;
    const body = req.body;

    const computer = await Computer.findByIdAndUpdate(id,body,{new:true});
    res.json({
        msg:"OK",
        computer
    })
}

const createComputer = async(req,res) => {
    const {motherboard,ram,micro} = req.body;
    const isComputerExist = await Computer.findOne({motherboard});

    if(isComputerExist){
        isComputerExist.stock += 1;
        isComputerExist.save();
        return res.json({
            msg:"Se ha agregado una motherboard del mismo modelo al stock"
        })
    }

    const computer = new Computer({micro,motherboard,ram})
    computer.stock += 1;
    await computer.save();

    res.json({
        msg:"OK",
        computer
    })
}

const deleteComputer = async(req,res) => {
    const {id} = req.params;
    const computer = await Computer.findByIdAndDelete(id);
    
    res.json({
        msg:"OK",
        computer
    })
}


module.exports = {
    getComputers,
    createComputer,
    getComputerByID,
    updateComputer,
    deleteComputer
    
}