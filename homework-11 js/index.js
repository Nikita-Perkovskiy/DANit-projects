
const elementsIkons = document.querySelectorAll('.fa-eye');
const elementsIkonslash = document.querySelectorAll('.fa-eye-slash');
elementsIkons.forEach(element=>{
element.addEventListener('click', elementAnimation)
function elementAnimation(){
    element.style.display ='none';
    element.nextElementSibling.style.display = 'block';
    element.previousElementSibling.type='text';
}});
elementsIkonslash.forEach(element=>{
    element.addEventListener('click', elementAnimation)
    function elementAnimation(){
        element.style.display ='none';
        element.previousElementSibling.style.display ='block';
        let parentElement = element.parentNode;
        parentElement.children[0].type = 'password';
    }});


const inputTextone = document.querySelector('.input-area-1');
const inputTexttwo = document.querySelector('.input-area-2');
const buttonForm = document.querySelector('.btn');
const buttonElem = document.querySelector('.after-button');
buttonForm.addEventListener('click', ()=>{
    if(inputTextone.value===inputTexttwo.value){
        alert ('You are welcome');
    }else{
        buttonElem.classList.add('after-button-b');}
});