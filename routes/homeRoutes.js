const express   = require('express');
const router    = express.Router();
const registerController= require('../controllers/signup/registerControllers')
const loginController= require('../controllers/login/loginControllers')




// router.get('/', (req, res)=>{
//     res.status(200).json({home: "the home page is here"})
// })

router.route('/signup').post(registerController.registerPost).get(registerController.registerGet)
router.route('/signin').post(loginController.loginPost).get(loginController.loginGet)




module.exports= router