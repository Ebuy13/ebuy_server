/* The below code is creating a router for the user. */

const express = require('express')

const router = express.Router()
const {
    createUser,
    getUser,
    getUsers
} = require('../controllers/userSignInControl')


router.post('/',createUser)
router.get('/',getUsers)
router.get('/:id',getUser)

module.exports = router