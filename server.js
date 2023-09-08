const express = require('express');
const fs= require('node:fs')
const path =require('path')
const dotenv = require('dotenv').config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));


fs.open('./test.txt', (error, data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data.toString('utf-8'))
    }
})


fs.readFile('./test.txt', (error, data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data.toString('utf-8'))
    }
})










// app.listen(process.env.PORT, ()=>{
//     console.log(`server is listening on port ${PORT} `)
// })