import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const KEYS = "feedback-form-state";
form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(getInformation, 500));

const { email, message } = form.elements;

const keyInput = JSON.parse(localStorage.getItem(KEYS));

if (keyInput) {
    form.elements.email.value = keyInput.email;
    form.elements.message.value = keyInput.message;
}

function getInformation(event) {
    event.preventDefault()
    const dataInput = { email: email.value, message: message.value }

    localStorage.setItem(KEYS, JSON.stringify(dataInput));  
}

function formSubmit(event) {
    event.preventDefault()
    console.log(JSON.parse(localStorage.getItem(KEYS)));

    localStorage.removeItem(KEYS);
    
    event.currentTarget.reset(); 
}