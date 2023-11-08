const {Schema,model} = require("mongoose");

const computerSchema = new Schema({
   
    motherboard:{
        type:String,
    },
    ram:{
        type:String,
    },
    micro:{
        type:String,
    },


});

const Computer = model("Computer",computerSchema);

module.exports = Computer;