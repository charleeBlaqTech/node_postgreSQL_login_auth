const express   = require('express');
const router    = express.Router();
const registerController= require('../controllers/signup/registerControllers')




router.get('/', (req, res)=>{
    res.status(200).json({home: "the home page is here"})
})

router.route('/users').post(registerController.registerPost).get(registerController.registerGet)




module.exports= router