/* This is a mongoose schema. It defines the structure of the data that will be stored in the database. */
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// defining the structure of the data of a product that would be stored in the database

const productDataModelSchema = new Schema({
    itemID: {
        type: String,
        required: true,
        unique: true
    },
    sellerID: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sellingStatus:{
        type: String,
        required: true
    },
    specs: {
        type: String,
        required: true
    },
    contactNo: {
        type: String
    },
    tags:{
        type: String
    },
    category:{
        type: String
    },
    yearsUsed: {
        type: Number
    },
    relevanceScore: {
        type: Number
    }

},{timestamps: true})

module.exports = mongoose.model('productDataModel',productDataModelSchema)