const userDataModel = require('../models/userModel')
const bcrypt = require('bcrypt');
/*
This module controls all the signIn control operations
*/

/**
 * This function returns all the documents in the collection, sorted by the createdAt field in
 * descending order.
 * @param req - the request object
 * @param res - the response object
 */
async function getUsers(req, res) {
    const users = await userDataModel.find({}).sort({ createdAt: -1 })
    res.status(200).json(users)
}


/**
 * It takes a request and a response, and then it finds a user by id, and if it doesn't find a user, it
 * returns a 404 error, and if it does find a user, it returns a 200 status and the user.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - the response object
 */

const getUser = async(req,res) => {
    // contains single user id
    const {id} = req.params
    const user = await userDataModel.findById(id)
    if (!user){
        return res.status(404).json({error:'No such User'})
    }
    res.status(200).json(user)
}


/**
 * It takes the request body, which is a JSON object, and then it takes the properties of that object
 * and assigns them to variables. 
 * 
 * Then it uses those variables to create a new user in the database. 
 * The user inputted password is encrypted and stored in the database

 * @param req - the request object
 * @param res - the response object
 */
const createUser = async (req, res) => {
    console.log("Request Data")
    console.log(req.body)
    const {userID, email, username, password, address, phone} = req.body
    try{       
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password with the salt
        console.log("password",password)
        const new_password = await bcrypt.hash(password, salt);
        console.log("en",new_password)
        // Store the hashed password in the database
        const user = await userDataModel.create({
            userID: userID, 
            email: email, 
            username: username,
            password: new_password, 
            address: address, 
            phone: phone
        }) 
        res.status(200).json(user)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports =  {
    createUser,
    getUser,
    getUsers
}