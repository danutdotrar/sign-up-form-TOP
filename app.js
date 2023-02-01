const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btnSubmit = document.querySelector('.btn')
const form = document.getElementById('form');
const small = document.querySelector('small')


// Functions
// Show input error message
function showError (input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}


// Event listeners
btnSubmit.addEventListener('click', function(e) {

    if (firstName.value == '') {
        showError(firstName, 'Username is required')
    } else {
        showSuccess(firstName);
    }
});
