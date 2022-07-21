const mongoose = require('mongoose');

// DEFINE SCHEMA
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [2, "Title must be longer than 2 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price must be provided"],
        min: [0, "Price must be more than 0"],
        max: [9000, "Price must be less than 9000"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [5, "Description must be longer than 5 characters"]
    }
}, {timestamps:true})

// REGISTER THE SCHEMA
const Product = mongoose.model("Product", ProductSchema);

// EXPORT MODEL
module.exports = Product;