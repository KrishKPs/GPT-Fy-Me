

const express = require('express');  
const axios = require('axios');  
const { user, userdetails } = require('../db');


async function getGptResponse(req,res) {

    const {questions} = req.body; 
    const name = req.params.name;    

    if (!questions) {
        return res.status(400).json({msg: "No questions provided"});
    }

    if (!name) {
        return res.status(400).json({msg: "Link not found"});    
    }

     const users = await user.find({ name: name });  
        if (!user) {
            return res.status(404).json({msg: "User Not Found"});
        }

        const details = await userdetails.find({ name: name });   
        if (!details) {
            return res.status(404).json({msg: "User Details Not Found"});
        }   

        const userInformation = `User Name: ${users}, ${JSON.stringify(details)}`;

    try{
        const responce = await axios.post('https://api.openai.com/v1/chat/completions',

   
        {
   
            model : "gpt-3.5-turbo", 
            messages : [{
   
               role : "system", 
               content : `"You are an assistant with access to specific user information. Here is the users information ${userInformation} Use this information to answer any questions about this user accurately and concisely. Only refer to the provided data and do not include any information outside of this context. if you get any error related to the userinformation then just responce There was a error Generating the responce and if the user ask quetions not related to the user then just respnd Plase ask me question Related to the user and try to keep you responce under 2 lines and dont just directly give the answer frame the answers nice and shortly"
               `
           }, {
   
               role : "user", 
               content : questions
           }
       
       ], 
             max_tokens: 100,
               temperature: 0.7,
               n:1,
               stop:null, 
   
       }, 
       {
           headers : {
               'Content-Type': 'application/json', 
               Authorization : `Bearer ${process.env.API_KEY}`
           }
       }); 
     res.json({
         responce : responce.data.choices[0].message.content}); 
    } catch(error) {

        console.error(error); 
        res.status(500).json({msg: error});    
    } 

         
}

module.exports = getGptResponse; // Export the getGptResponse function for use in routes 



axios.post('' , {})


