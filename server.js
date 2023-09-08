const express   = require('express');
const pool      = require('./dbConnect/connect_db')
const dotenv    = require('dotenv');
dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.get('/', (req, res)=>{
    res.status(200).json({home: "the home page is here"})
})




app.get('/users', async (req, res)=>{
    try { 
        await pool.query('CREATE TABLE users')
        const currentUser = rows[0]['current_user']
        console.log(currentUser)
    } catch (error) {
        console.error(error)
    }
})






app.listen(process.env.PORT_SERVER, ()=>{
    console.log(`server is listening on port ${process.env.PORT_SERVER} `)
})