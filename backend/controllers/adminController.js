const User = require("../models/User");

const getAllUsers = async(req,res) => {

    try {
        const users =await User.find({},{password:0});

        // console.log(users);

        if(!users) {
            return res.status(404).json({msg:"No users found"});
        }
        return res.status(200).json({users});
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports = getAllUsers;