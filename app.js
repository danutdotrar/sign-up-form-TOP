const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btnSubmit = document.querySelector('.btn')
const form = document.getElementById('form');
const small = document.querySelector('small');
const phone = document.getElementById('phone');
const label = document.querySelector('label');


// Functions
// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// Check email
function checkEmail(email) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// Check required fields
function checkRequired(input, message) {
    if (input.value.trim() === '') {
        showError(input, message);
    } else {
        showSuccess(input);
    }
};


// Check length
function checkLength(input, min, max) {

    if (input.value.length < 8) {
        showError(input, `Minimum ${min} characters`);
    } else if (input.value.length > 15) {
        showError(input, `Maximum ${max} characters` );
    } else
    showSuccess(input);
}

function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords must match')
    } else {
        showSuccess(input2);
    }
}

// Event listeners
btnSubmit.addEventListener('click', function(e) {

    checkRequired(firstName, 'First name is required')
    checkRequired(lastName, 'Last name is required')
    checkRequired(email, 'Email is required')
    checkRequired(phone, 'Phone is required')
    checkRequired(password, 'Password is required')
    checkRequired(password2, 'Password Confirmation is required')
    
    checkLength(password, 8, 15);
    checkPassword(password, password2);
});
