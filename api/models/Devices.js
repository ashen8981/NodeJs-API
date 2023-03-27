const mongoose = require("mongoose");
const DeviceSchema = new mongoose.Schema({

    serialNumber:{
        type:String,
        required:true,
        unique:true
    },

    image:{
        type:String,
        required:true
    },

    type:{
        type:String,
        enum: ['pos', 'kiosk', 'signage'],
        required:true
    },

    status:{
        type:String,
        enum: ['active', 'inactive'],
        required:true
    },
},

{timestamps:true}

);

module.exports = mongoose.model("Device", DeviceSchema);