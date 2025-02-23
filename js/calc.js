/*Задание: Напишите функцию calculator, которая принимает два числа и оператор (+, -, *, /)
 и возвращает результат операции. */

let term1;
let term2;
let operator;


term1 = prompt("Введите первое слагаемое: ");
term2 = prompt("Введите второе слагаемое: ");
operator = prompt("Введите оператор: ");

function calc(){
    switch(operator){
        case "+":
            console.log(Number(term1) + Number(term2));
        break;
        
        case "-":
            console.log(Number(term1) - Number(term2));
        break;
    
        case "/":
            console.log(Number(term1) / Number(term2));
        break;
    
        case "*":
            console.log(Number(term1) * Number(term2));
        break;
    }
}

calc();

