import throttle from "lodash.throttle";
const refs = {
    form: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('input'),
    textarea: document.querySelector('textarea')
};

const STORAGE_KEY = "feedback-form-state";
const objSavedData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputChange, 500));

fillerFormFields();
    
function onInputChange(evt){
    objSavedData.email = refs.inputEmail.value;
    objSavedData.message = refs.textarea.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objSavedData));
}

function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(objSavedData);
}

function fillerFormFields(){
    const storageData = localStorage.getItem(STORAGE_KEY);
    const convertStorageData = JSON.parse(storageData);

    if (storageData){
        refs.inputEmail.value = convertStorageData.email;
        refs.textarea.value = convertStorageData.message;
    }
}