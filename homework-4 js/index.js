/*
Теория
1. Функции необходимы, чтобы реализовать один и тот же код в разных местах программы. Не дублируя его и таким образом оптимизирую всю программу.
2. Это необходимо, чтобы собственно ее реализовывать, задавая аргументы функции мы можем получить результат ее работы. Если ее параметрам не заданы аргументы мы не получим результат.
3. return прерывает работу функции и возвращает полученное значениеб, юлагодаря этому мы можем получить результат ее работы.  
*/ 

//Практика

let number1 = +prompt("Your number?");
let number2 = +prompt("Your number?");
let operation = prompt("Choose +, -, *, / ?");

function calc (number1, number2, operation){
     switch  ( operation){
         case "+":
            return  number1 + number2; 
            break;
        case "-":
            return   number1 - number2; 
            break;
         case "/":
            return number1 / number2;
             break;
         case "*":
            return  number1 * number2; 
            break;
     }
}
console.log(calc (number1, number2, operation));
