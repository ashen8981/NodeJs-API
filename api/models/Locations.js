const mongoose = require("mongoose");
const LocationSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },

   address:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    devices:[{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Device' 
    }]
},

{timestamps:true}

);

module.exports = mongoose.model("Location", LocationSchema);