const form = document.querySelector("#contact-form");
const name = document.querySelector("#fullname");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const contactMessage = document.querySelector("#message");
const contactMessageError = document.querySelector("#message-error");
const nameCheck = document.querySelector("#name-check")
const emailCheck = document.querySelector("#email-check")
const subjectCheck = document.querySelector("#subject-check")
const messageCheck = document.querySelector("#message-check")
const validation = document.querySelector(".validation-message");

function validateForm(event){
    event.preventDefault();

    if(checkLength(name.value, 5) === true){
        nameError.style.display = "none" ,
        nameCheck.style.display = "block";
        
    }
    else{
        nameError.style.display = "block";
        nameCheck.style.display = "none";
    }

    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
        emailCheck.style.display = "block";
        
    }
    else{
        emailError.style.display = "block";
        emailCheck.style.display = "none";
        
    }

    if(checkLength(subject.value, 14) === true){
        subjectError.style.display = "none";
        subjectCheck.style.display = "block";

    }
    else{
        subjectError.style.display = "block";
        subjectCheck.style.display = "none";
    }
    if(checkLength(contactMessage.value, 25) === true){
        contactMessageError.style.display = "none";
        messageCheck.style.display = "block";
    }
    else{
        contactMessageError.style.display = "block";
        messageCheck.style.display = "none";
    }
    
    if(checkLength(name.value, 0) === true && validateEmail(email.value) === true && checkLength(contactMessage.value, 14) === true){
        validation.style.display = "block";
    } 
    else{
        validation.style.display = "none";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len){
    if(value.trim().length > len){
        return true;
    } else{
        return false;
    }
}

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}