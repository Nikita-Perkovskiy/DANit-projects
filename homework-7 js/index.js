/*
Теория:
1. Этот метод последовательно перебирает все элементы массива и применяет к ним заданнцю функцию.
2. Полностью можно установить length = 0.
3. Метод Array.isArray(), возвращает true если переменная является массивом и false если нет.
*/
// Практика

function  filterBy(arrayStart, arrayType){
    const arrayNew = arrayStart.filter(item => typeof item != arrayType);
    return arrayNew;
};
console.log(filterBy(['hello', 'world', 23, '23', null], ["string"]));