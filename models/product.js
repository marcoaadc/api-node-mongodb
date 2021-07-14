const mongoose = require('mongoose');

productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    qnt:{
        type: Number,
        required: true
    },
    effect: {
        type: String
    }
})

module.exports = mongoose.model("inventory",productSchema, "inventory")