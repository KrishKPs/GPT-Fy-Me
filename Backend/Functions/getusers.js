const { user } = require("../db");

async function getuser(req,res) {


    const userExist = await user.find({}); 

    if(!userExist){
        return res.status(404).json({msg: "User Not Found"});
    }   


    res.json({
        msg: "Users Retrieved Successfully",
        data: userExist 
    });     




} 

module.exports = getuser;