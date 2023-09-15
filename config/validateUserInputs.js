
const errors=[];

function checkInput(obj){
    const emailValidated= obj.email ? obj.email.toLowerCase().trim(): "";
    const passwordValidated= obj.password ? obj.password.toLowerCase().trim(): "";
    const validated={
        email: emailValidated,
        password: passwordValidated
    }
    checkEmptyString(validated)
}


function checkEmptyString(obj){
    if(obj.email === ""){
        errors.push("Email cannot be empty")
    }
    if(obj.password === "" || obj.password < 8){
        errors.push("Email cannot be empty or less than 8 characters")
    }

    checkComplete(obj)
}


const validationResult= function checkComplete(obj){
    if(errors.length){
        return errors
    }else{
        return obj
    }
}

module.exports= validationResult;