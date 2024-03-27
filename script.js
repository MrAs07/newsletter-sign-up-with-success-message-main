console.log("first")
const card1= document.querySelector(".wrapper");
const card2 =document.querySelector(".card-2");
const pure_form= document.querySelector('form');
const btn  = document.querySelector(".form_button");
const errored =document.querySelector(".error");
const sec_btn = document.querySelector(".card_2btn");
const user_mail = document.getElementById('user_mail');

function validateEmail(email){
    const emailRegex =/^[^@]+@[^@]+\.[^@]+$/;
    return emailRegex.test(email);
}

pure_form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("hii");
    const emailinput = document.getElementById('email_id');
    const email =emailinput.value;
    console.log("the:-"+emailinput.value);
    if(validateEmail(email)){
        card1.classList.add('hide');
        card2.classList.remove('hide');
        user_mail.innerText = email;
        emailinput.value='';
    }else{
    errored.classList.remove('hide');
    }
    
})


sec_btn.addEventListener('click',() =>{
    card1.classList.remove('hide');
         card2.classList.add('hide');
         errored.classList.add('hide');
})