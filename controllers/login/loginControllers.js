const pool      = require('../../dbConnect/connect_db');
const comparePassword = require('../../config/comparePassword');
const validateInput = require('../../config/validateUserInputs');

const loginGet= (req, res)=>{
    try { 
        res.status(200).json({message: "this route will display the login form"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


const loginPost= async (req, res)=>{
    if(!req.body){
        res.status(400).json({message: "form data cannot be empty"})
    }else{
        try { 

            const {errors, validated}= validateInput(req.body);
            if(errors.length){
                res.status(400).json({message:errors})
            }else{
                const foundUser= await pool.query('SELECT * FROM users WHERE email= $1',[validated.email])
                if(foundUser){
                    const passwordVerified= await comparePassword(validated.password, foundUser.rows[0].password);
                    if(passwordVerified){
                        res.status(200).json({message: `You have successfully logged in ${validated.email}`})
                    }else{
                        res.status(400).json({message: "password/email not correct"})
                    }  
                   
                }else{
                    res.status(400).json({message: "User with this email not found"})
    
                }
            }

        } catch (error) {
            console.error(error.message)
        }
    }
    
}


module.exports={loginGet,loginPost}