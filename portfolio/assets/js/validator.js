const phoneField = document.querySelector('input[name="phone"]');

phoneField.addEventListener('change', () => {
    if(phoneField.validity.tooLong) {
        alert("Maximum 13 characters only");
    } else {
        alert('OK');
    }
})
