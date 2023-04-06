/* The below code is creating a router for the user. */

const express = require('express')

const router = express.Router()
const {
    createProduct,
    getProducts
} = require('../controllers/productCreationControl')


router.post('/',createProduct)
router.get('/',getProducts)

module.exports = router