const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("The form was submitted");


const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
         firstNameError.style.display = "none";
          } else {
            firstNameError.style.display = "block";
      }
 const lastName = document.querySelector("#lastName");
 const lastNameError = document.querySelector("#lastNameError");
 const lastNameValue = lastName.value;

 if (checkInputLength(lastNameValue) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
 }
 const email = document.querySelector("#email");
 const emailError = document.querySelector("#emailError");
 const invalidEmailError = document.querySelector("#invalidEmailError");
 
 const emailValue = email.value;

 if (checkInputLength(emailValue) === true) {
     emailError.style.display = "none";
 } else {
     emailError.style.display = "block";
 }
 
 if (validateEmail(emailValue) === true) {
     invalidEmailError.style.display = "none";
 } else {
     invalidEmailError.style.display = "block";
 }
 
 const message = document.querySelector("#message");
 const messageValue = message.value;
 const messageError = document.querySelector("#messageError");

 
 
 message.addEventListener("keyup", checkLength);
 
 function checkLength(event) {
    const inputValue = event.target.value.trim();
    const valueLength = inputValue.length;
    console.log(valueLength)

    if(valueLength > 9) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
 }

}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

function checkInputLength(value) { 
    
    const trimmedValue = value.trim();

    
    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}
