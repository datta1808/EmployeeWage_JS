var prompt = require('prompt-sync')();

//Validation PinCode
function validate(pinCode) {
    let pinRegex = RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
    if (pinRegex.test(pinCode)) {
        console.log("PinCode is correct");
    } else {
        console.log("PinCode is incorrect");
    }
}

let pinCode = prompt("Enter the PinCode : ");
validate(pinCode);