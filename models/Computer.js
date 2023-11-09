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
    stock:{
        type:Number,
        default:0
    }

});

const Computer = model("Computer",computerSchema);

module.exports = Computer;