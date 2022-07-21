// IMPORT MODEL
const { response } = require("express")
const Product = require("../models/productManager.models")


// CREATE
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(error => res.status(400).json(error))
    }

// READ ALL
module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(error => res.json(error))
}

// READ ONE
module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id: req.params.product_id})
        .then(oneProduct => res.json(oneProduct))
        .catch(error => res.json(error))
}

// UPDATE
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.product_id}, req.body, {new: true, runValidators: true})
        .then(updateOneProduct => res.json(updateOneProduct))
        .catch(error => res.status(400).json(error))
}

// DELETE
module.exports.destroyProduct = (req,res) => {
    Product.deleteOne({_id: req.params.product_id})
        .then(confirm => res.json(confirm))
        .catch(error => res.json(error))
}