const phoneField = document.querySelector('input[name="phone"]');
const nameField = document.querySelector('input[name="fullname"]');
const emailField = document.querySelector('input[name="email"]');
const msgField = document.querySelector('#message');

function validateFields() {
    if(nameField.validity.valueMissing) {
        alert("What is your papa put is your name?");
        return false;
    }
    if(emailField.validity.valueMissing) {
        alert("Where can I send you a mail?");
        return false; 
    }
    if(emailField.validity.typeMismatch) {
        alert("Email address is the one that contains @ and dot");
        return false; 
    }
    if(phoneField.validity.patternMismatch) {
        alert("I want such phone number too. Are you VIP or something?");
        return false; 
    }
    if(phoneField.validity.tooShort) {
        alert("This is the first time I am seeing something so short 😝");
        return false; 
    }
    if(phoneField.validity.tooLong) {
        alert("It's too big!!! 😱");
        return false; 
    }
    if(msgField.validity.valueMissing) {
        alert("Please type if you want to say something to me. I can't read mind.");
        return false;
    }

    return true;
}