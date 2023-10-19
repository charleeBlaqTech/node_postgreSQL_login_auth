
let errors=[];

function validateInput(obj){

    const validated     =  trimInputs(obj)
    const result        = checkEmptyString(validated)

    if(result && errors.length){
        return {errors,  validated}
    }else{
        return {errors,  validated}
    }
}


function trimInputs(obj){

    const emailValidated= obj.email ? obj.email.toLowerCase().trim(): "";
    const passwordValidated= obj.password ? obj.password.toLowerCase().trim(): "";
    const validated={
        email: emailValidated,
        password: passwordValidated
    }

    return validated
}

function checkEmptyString(obj){
    if(obj.email === ""){
        errors.push("Email cannot be empty")
    }
    if(obj.password === "" ){
        errors.push("password cannot be empty");
    }

    return errors
}



module.exports= validateInput;