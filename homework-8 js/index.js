/*Теория
1. DOM модель представляет все элементы html, как объекты что позволяет применять к ним возможности js.
2. innerText выводит только текст игнорирую html разметку, а innerHTMl выводит и текст и разметку.
3. Есть 6 способов три из них устарели ( по имени тега, имени CSS класса и по имени элемента), наиболее распространены способы querySelector и querySelectorAll (по CSS классу) и по id  тега getElement(s)By.
*/
//Практика

//1

let paragraph = document.getElementsByTagName('p');
console.log(paragraph);
for(let i=0; i<paragraph.length; i++){
    paragraph[i].style.background = '#ff0000';
};

//2

let elementById = document.getElementById('optionsList');
console.log(elementById);
let parentElementById = elementById.parentElement;
console.log(parentElementById);
let childsElementById = elementById.childNodes;
for(let i=0; i<childsElementById.length; i++){
    console.log(childsElementById[i].nodeName, childsElementById[i].nodeType);
};

//3

let elementByClassName = document.querySelectorAll('testParagraph');
elementByClassName.innerHTML = 'This is a paragraph';
console.log(elementByClassName);

//4

let elementFromMainHeader = document.querySelectorAll('main-header');
let parentsElementFromMainHeader = elementFromMainHeader.children;
for(let i=0; i<parentsElementFromMainHeader.length; i++){
    parentsElementFromMainHeader[i].add('nav-item');
    console.log(parentsElementFromMainHeader[i]);
    console.log(parentsElementFromMainHeader[i].classList);
};

//5

let elementSelect = document.querySelectorAll('section-title');
elementSelect.classList.remove('section-title');




