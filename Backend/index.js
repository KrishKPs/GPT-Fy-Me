require('dotenv').config(); 
const express = require('express');  
const app = express();   
const cors = require('cors'); 
const PORT = process.env.PORT || 5000;  
const db = require('./db');  

app.use(cors());     
app.use(express.json()); 


const mainRoute = require('./Routes/index'); 


app.use('/gpt', mainRoute);  


app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);});