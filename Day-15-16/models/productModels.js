const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,

        },
        price: {
            type: Number,
            required: true,
        },
        thumbnail: {
            type: String
        },
        images: [{},{}],
        description: String,
        metaData: {},
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt:{
            type: Date,
            default: Date.now()
        }


    }
)


// const productSchema = new mongoose.Schema({
//     pizza_name: String,
//     unit_price: Number,
//     total_price: Number,
//     pizza_size: String
// })
const productModel = mongoose.model('products', productSchema);
module.exports = productModel;