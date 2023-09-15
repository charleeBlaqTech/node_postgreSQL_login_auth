const bcrypt    = require('bcrypt')


// TO hash USER PASSWORD USING BCRYPT

const hashPassword= async(password)=>{
    let salt= await bcrypt.genSalt(12)
    const hashed= await bcrypt.hash(password, salt);
    return hashed
}



module.exports= hashPassword