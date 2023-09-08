const reverseString = require('./reverse')

function check(word){
    return word.toLowerCase() === reverseString(word).toLowerCase()
}


module.exports= check