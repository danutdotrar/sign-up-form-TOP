const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btnSubmit = document.querySelector('.btn')
const form = document.getElementById('form');
const small = document.querySelector('small');
const phone = document.getElementById('phone');


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

// Event listeners
btnSubmit.addEventListener('click', function(e) {

    if (firstName.value == '') {
        showError(firstName, 'Username is required')
    } else {
        showSuccess(firstName);
    }

    if (email.value == '') {
        showError(email, 'Email is required')
    } else if(!checkEmail(email.value)) {
        showError(email, 'Email is not valid')
    } else {
        showSuccess(email);
    }

    if (lastName.value == '') {
        showError(lastName, 'Last Name is required')
    } else {
        showSuccess(lastName);
    }

    if (password.value == '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password);
    }

    if (password2.value == '') {
        showError(password2, 'Password is required')
    } else {
        showSuccess(password2);
    }

    if (phone.value == '') {
        showError(phone, 'Phone is required')
    } else {
        showSuccess(phone);
    }
});
