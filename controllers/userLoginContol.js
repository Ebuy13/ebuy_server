const userDataModel = require('../models/userModel')
const bcrypt = require('bcrypt');

// to login a user
/**
 * It takes in a request object and a response object, and then it tries to find a user with the email
 * address in the request object. If it finds a user, it checks if the encrypted password in the request object
 * matches the password in the database. If it does, it sends a response saying that the login was
 * successful. If it doesn't, it sends a response saying that the password doesn't match. If it doesn't
 * find a user, it sends a response saying that the user doesn't exist.

 * @param req - request object
 * @param res - The response object.
 */
const loginUser = async(req,res) => {
    console.log("Request Data")
    console.log(req.body)
    try{
        const user = await userDataModel.findOne({email : req.body.email})
        console.log(req.body.email,req.body.password)
        
        if (user) {
            console.log(user.email,user.password)
            // check for password match
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            console.log(isMatch)
            if (isMatch){
                res.status(200).json({userID: user.userID, message: "login successfull"})
            }
            else{
                res.status(400).json({userID: "None", message: "Password does not match"})
            }
        }
        else{
            res.status(400).json({userID: "None", message: "User does not exist"})
        }
    }
    catch(error){
        res.status(400).json({error})
    }
}

module.exports = { loginUser }