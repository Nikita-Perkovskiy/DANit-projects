/*Теория
1.Пользователь может вводить в input текст не только при помощи клавиатуры. Поэтому рекомендуется использовать события собственно input.
*/
//Практика
const keyList = document.querySelectorAll('.btn');
keyList.forEach(e=>{
    document.addEventListener('keydown', function (event) {
        if( event.key===`${e.id}`){
            e.style.backgroundColor='blue';
        }else{
            e.style.backgroundColor='black';
        }
    })})
