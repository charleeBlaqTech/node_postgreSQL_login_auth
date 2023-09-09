const express   = require('express');
const pool      = require('../dbconnect/connect_db')
const router    = express().router();




router.get('/', (req, res)=>{
    res.status(200).json({home: "the home page is here"})
})


router.get('/users', async (req, res)=>{
    try { 
        const users= await pool.query('SELECT * FROM users')
        console.log(users)
    } catch (error) {
        console.error(error)
    }
})




module.exports= router