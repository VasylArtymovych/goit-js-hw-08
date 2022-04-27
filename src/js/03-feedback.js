//* import throttle packege to prooject:
import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
    submitBtn: document.querySelector('.feedback-form button')
};

const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputChange, 500));

fillerFormFields();
    
function onInputChange(evt){
    const objSavedData = {};
    objSavedData.email = refs.inputEmail.value;
    objSavedData.message = refs.textarea.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objSavedData));
};

function onFormSubmit(evt){
    evt.preventDefault();
    
    const email = evt.currentTarget.elements.email.value;
    const message = evt.currentTarget.elements.message.value;

    if(email === '' || message === ''){
        return
    }

    console.log({email, message});

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
};

function fillerFormFields(){
    const storageData = localStorage.getItem(STORAGE_KEY);
    const convertStorageData = JSON.parse(storageData);

    if (storageData){
        refs.inputEmail.value = convertStorageData.email;
        refs.textarea.value = convertStorageData.message;
    }
};