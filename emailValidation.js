var prompt = require('prompt-sync')();

//Validating Email
function validateEmail(email) {
    let emailRegex = RegExp('^([a-z]+)([0-9])*([_+-.]{1}[a-z0-9]+)*(@)([a-z0-9]+)[.]([a-z]{3,})([.][a-z]{3}){0,1}$');

    if (emailRegex.test(email)) {
        console.log("Email is correct");
    } else {
        console.log("Email is incorrect");
    }
}

let email = prompt("Enter the email Id: ");
validateEmail(email);