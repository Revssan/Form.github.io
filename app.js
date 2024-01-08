const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const usernameVal= username.value.trim()
    const emailVal= email.value.trim()
    const passwordVal= password.value.trim()
    const cpasswordVal= cpassword.value.trim()
    let success=true

    if(usernameVal==''){
        success=false
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(email===''){
        success=false
        setError(email,'Email is required')
    }
    else if(!(validateEmail(emailVal))){
        success=false
        setError(email,'Please enter the valid email')
    }
    else{
        setSuccess(email)
    }
    if(passwordVal ===''){
        success=false
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success=false
        setError(password,'Please enter the valid password')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal===''){
        success=false
        setError(cpassword,'Please confirm the password')
    }
    else if(cpasswordVal!==passwordVal){
        success=false
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    return success;

}

function setError(element,message){
    const inputBox = element.parentElement
    const errorElement= inputBox.querySelector('.error');

    errorElement.innerText = message;
    inputBox.classList.add('error')
    inputBox.classList.remove('success')
}

function setSuccess(element,message){
    const inputBox = element.parentElement
    const errorElement= inputBox.querySelector('.error');

    errorElement.innerText = '';
    inputBox.classList.add('success')
    inputBox.classList.remove('error')
}

const validateEmail= (email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
};

