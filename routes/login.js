/* The above code is creating a router for the login route. */
const express = require('express')

const router = express.Router()
const {loginUser} = require('../controllers/userLoginContol')

router.post('/',loginUser)

module.exports = router