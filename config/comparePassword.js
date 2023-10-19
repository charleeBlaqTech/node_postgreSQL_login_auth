const bcrypt    = require('bcrypt')




// TO COMAPRE PASSWORDS USING BCRYPT

const comparePassword= async(password, encrypted)=>{
    const confirmed= await bcrypt.compare(password, encrypted);
    if(confirmed){
        return confirmed
    }
    return false;
}



module.exports= comparePassword