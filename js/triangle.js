// Составьте программу, которая в зависимости от выбора пользователя 
// вычисляет биссектрису или площадь треугольника:

let chose;
let a = parseFloat(prompt("Введите a: "));
let b = parseFloat(prompt("Введите b: "));
let c = parseFloat(prompt("Введите c: "));
let p;
let s;

function square(){
    p = (a + b + c)/2
    s = Math.sqrt(p * ((p - a) * (p -b) * (p - c)));
    console.log("Площадь треугольника: " + s);
}

chose = prompt("Что вы хотие?(Найти площадь треугольника = 1/ Найти биссектрису = 2)");

switch(chose){
    case 1:
        square();
    break;
}

