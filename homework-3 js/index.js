/* теория
1. Циклы необходимы проведения многократно однотипных действий с данными условиями. Это обусловленно необходимостью работы с большим количеством данных и является первичном способом оптимизации такой работы.
2.  В циклах While и do while, мы прописываем условие выхода из цикла, это хорошо подходит для простого перебора, у этих циклов достаточно простой и понятный синтаксис. do While позволяет провести как минимум одну иттерацию цикла, даже при неправильном условии. Цикл for имеет более полное описание (страрт цикла, его условие и шаг иттерации) он более лаконичен и компактен.
3. Типы данных в js можно преобразовывать друг в друга для этого есть соответсвующие операторы, когда это происходит благодаря по желанию программиста это явное приведение. Также js может делать автоматически при проведении определенных операций напрмиер при использовании не строго равно. */ 
//практика
let userNumber = +prompt("Your number?");
if (Number.isNaN(userNumber)){
    console.log("Sorry, no numbers")
}else if (userNumber % 1 == 0){
if (userNumber > 0){
for (let i = 0; i <= userNumber; i++){
    if(i%5===0){
        console.log(i)}
}}else if (userNumber < 0) {
    for (let a = 0; a >= userNumber; a--){
        if(a%5===0){
            console.log(a)}
}} }else{
    console.log("Sorry, no numbers")
}