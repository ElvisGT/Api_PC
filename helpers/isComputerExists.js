const Computer = require("../models/Computer");

const isComputerExists = async(req,res,next) => {
    const {motherboard} = req.body;
    const isComputerExist = await Computer.findOne({ motherboard });

    if (isComputerExist) {
        isComputerExist.stock += 1;
        isComputerExist.save();
        return res.json({
            msg: "Se ha agregado una motherboard del mismo modelo al stock"
        })
    }


    next();
}


module.exports = {
    isComputerExists
}