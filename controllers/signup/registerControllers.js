const pool      = require('../../dbConnect/connect_db');
const hashPassword= require('../../config/hashPassword');






const registerGet= (req, res)=>{
    try { 
        res.status(200).json({message: "this route will display the signup form"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


const registerPost= async (req, res)=>{
    if(!req.body){
        res.status(400).json({message: "form data cannot be empty"})
    }else{
        try { 

            const {firstname, surname,email,password}= req.body

            const hashedPassword= await hashPassword(password);

            await pool.query('INSERT INTO users(firstname, surname,email, password) VALUES($1,$2,$3,$4)',[firstname, surname,email,hashedPassword])

            res.status(200).json({message: `Your account is created successfully ${firstname}`})

        } catch (error) {
            console.error(error.message)
        }
    }
    
}


module.exports={registerGet,registerPost}