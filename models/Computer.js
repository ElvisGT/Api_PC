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

computerSchema.methods.toJSON =  function() {
    const {__v,...rest} = this.toObject();

    return rest;
}

const Computer = model("Computer",computerSchema);

module.exports = Computer;