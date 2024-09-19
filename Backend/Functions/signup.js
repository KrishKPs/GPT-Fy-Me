const { user } = require("../db");
const generatejwt = require("../generatejwt");
const { useSchema } = require("../type");

async function signup ( req, res) {


    const person = req.body; 
    const safeperson = useSchema.safeParse(person); 
    
    if (!safeperson.success) {
        return res.status(400).json({msg : "Invalid Inputs"});
    }   

    await user.create({

        name: person.name,
        email: person.email,
        password: person.password,
    });

    const token = generatejwt(person); 
    
      res.json({msg: "User Created Successfully" , token : token});  
}

module.exports = signup;  // Export the signup function for use in routes 