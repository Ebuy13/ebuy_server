// This module contains functions related to upload, modify and delete a product

const productDataModel = require('../models/productModel')

/**
 * This function creates a new product in a database using data from a request body.
 * @param req - The request object contains information about the HTTP request that was made, including
 * the request headers, request parameters, and request body.
 * @param res - `res` is the response object that is used to send the response back to the client
 * making the request. It contains methods like `status()` to set the HTTP status code, `json()` to
 * send a JSON response, and many others.
 */

const createProduct = async (req, res) => {
    console.log("Request Data")
    console.log(req.body)
    const {
        itemID, 
        sellerID,
        productName, 
        brandName,
        price, 
        sellingStatus,
        specs,
        contactNo,
        tags,
        category,
        yearsUsed,
        relevanceScore
    } = req.body
    try{       
        const user = await productDataModel.create({
            itemID: itemID, 
            sellerID: sellerID, 
            productName: productName,
            brandName: brandName, 
            price: price, 
            sellingStatus: sellingStatus,
            specs: specs, 
            contactNo: contactNo, 
            tags: tags,
            category: category, 
            yearsUsed: yearsUsed, 
            relevanceScore: relevanceScore
        }) 
        res.status(200).json(user)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


// Function to retrieve all the products
const getProducts = async(req,res) => {
    const products = await productDataModel.find({}).sort({relevanceScore: -1})
    res.status(200).json(products)
}

module.exports = {createProduct,getProducts}