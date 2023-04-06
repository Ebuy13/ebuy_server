/* This is a mongoose schema. It defines the structure of the data that will be stored in the database. */
const mongoose = require('mongoose')

const Schema = mongoose.Schema

/* Defining the structure of the data that will be stored in the database. */

const userDataModelSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('userDataModel',userDataModelSchema)