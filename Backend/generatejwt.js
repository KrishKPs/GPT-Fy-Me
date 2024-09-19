const jwt = require('jsonwebtoken');     
const jwtpass = process.env.JWT_SECRET; 

function generatejwt (person) {

    return jwt.sign({name : person.name} , jwtpass); 
}

module.exports = generatejwt; 