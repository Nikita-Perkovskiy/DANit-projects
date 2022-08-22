/* Теоритические вопросы 
1. Существует большая група примитивных типов данных, а также objekt и symbol. К примитивным относят: number, bigInt, string, boolean, null и undefined. 
2. Нестрогое равно == проводит приведение типов при сравнении величин, а строгое === нет.
3. Сврего рода функция производящая операции и преобразования с операндами*/

//практика

let userName = prompt("What is your name?");
while (Boolean(userName) == false && typeof userName == NaN) {
    userName = prompt('What is your name? ', userName)
}
let userAge = prompt("How old are you?");
while (Number.isNaN(userAge)) {
    userAge = prompt('How old are you? ', userAge)
}
if (userAge < 18){
    alert ("You are not allowed to visit this website")
}else if (userAge <= 22){
    if(confirm ("Are you sure you want to continue?") === true){
        alert ("Welcome, " + userName)
    } else{
        alert ("You are not allowed to visit this website")
    }
}else if (userAge > 22){
    alert ("Welcome, " + userName)
}
