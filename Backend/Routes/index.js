const express = require('express'); 
const signup = require('../Functions/signup');
const authenticate = require('../authenticate');
const enterdatails = require('../Functions/enterdetails');
const getGptResponse = require('../Functions/gpt');
const getuser = require('../Functions/getusers');
const router = express.Router(); 



router.get('/', (req, res) => {
    res.send('API is running...');
}); 

router.post('/signup' , signup )
router.post('/enterdetails' , authenticate , enterdatails )
router.post('/airesponce/:name' , authenticate, getGptResponse)
router.get('/users' , authenticate , getuser)



module.exports = router