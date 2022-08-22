/*Теория
1. Для этого есть два метода: document.createElement(tag) - создание элемента с заданным тегом и document.createTextNode(text) - создание текстевого узла. После чего элемент нужно вставить в html разметку это можно сделать относительно уже имеющихся элементов: node.append(...nodes or strings) – добавляет узлы или строки в конец node, node.prepend ,node.before, node.after, node.replaceWith. Также есть более уневерсальный метод .insertAdjacentHTML.
2. параметр where он указывает куда должен быть вставлен новосозданный элемент. Он может принимать значения: "beforebegin", "afterbegin", "beforeend", "afterend".
3.  Для этого есть метод remove(), его нельзя использовать напрямую к элементу, нужно обращаться через родительский элемент. 
*/
//Практика

 function creatElements(arrayNew, domElement = document.body) {
    let newElement
    arrayNew.forEach(element => {
     newElement = domElement.insertAdjacentHTML('afterend', `<li>${element}</li>`)
    });
    return newElement;
}

creatElements(["1", "2", "3", "sea", "user", 23]);
