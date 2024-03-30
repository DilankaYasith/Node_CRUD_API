const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"]
    },

    price:{
        type:Number,
        required:true,
        default:0
    },

    quantity:{
        type:Number,
        required:true,
        default:0
    },

    Image:{
        type:String,
        required: false,
    },
},{
    timestamps:true
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;