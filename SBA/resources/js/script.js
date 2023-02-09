let usernameEl ;
let emailEl ;
let msgEL ;

let form;


const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkMsg = () => {
    let valid = false;


    const msg = msgEL.value.trim();

    if (!isRequired(msg)) {
        showErrorMsg(msgEL, 'Message cannot be blank.');
    }else {
        showSuccess(msgEL);
        valid = true;
    }

    return valid;
};


const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};



const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showErrorMsg = (textarea, message) => {
    // get the form-field element
    const formField = textarea.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};
const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

function validation(form ){
     event.preventDefault();
     usernameEl = document.querySelector('#username');
     emailEl = document.querySelector('#email');
     msgEL = document.querySelector('#msg');

    // form = document.querySelector('#send');
    // validate fields
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isMsgValid = checkMsg();

    let isFormValid = isUsernameValid && isEmailValid && isMsgValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        document.getElementById("blk").hidden=false;
        document.getElementById("panel").innerHTML="Hi "+ document.getElementById("username").value +". <br> Thank you for reaching out to us. We will respond back in 2 business days."
        document.getElementById("username").value="";
        document.getElementById("email").value="";
        document.getElementById("msg").value="";
        return true
    }
    return  false;
}