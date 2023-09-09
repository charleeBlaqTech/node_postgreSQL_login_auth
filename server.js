const express   = require('express');
const dotenv    = require('dotenv');
dotenv.config();
const homeRoutes= require('./routes/homeRoutes')


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use('/', homeRoutes);


app.listen(process.env.PORT_SERVER, ()=>{
    console.log(`server is listening on port ${process.env.PORT_SERVER} `)
})