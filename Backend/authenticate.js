const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library  

async function authenticate (req,res,next){

    const token = req.headers.authorization; 

    if (!token) {
        return res.status(401).json({msg: "No token provided"});
    }   

    try{

        const decode = jwt.verify(token, process.env.JWT_SECRET);    
        req.name = decode.name; 
        next(); 
    } catch (error) {
        return res.status(401).json({msg: "Invalid token"});
    }
}

module.exports = authenticate; // Export the authenticate function for use in routes 