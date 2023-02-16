const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    subcategory: {
        type: String
    },
    description: {
        type: String
    },
    unit: {
        type: Number
    },
    price: {
        type: Number
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('products', ProductSchema);