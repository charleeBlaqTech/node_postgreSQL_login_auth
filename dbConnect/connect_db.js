const dotenv    = require('dotenv');
dotenv.config();
const {Pool, Client} = require('pg');


const pool = new Pool({
    connectionString: process.env.DB_CONNECT_RENDER,
    ssl: {
        rejectUnauthorized: false
    }
})




module.exports = pool