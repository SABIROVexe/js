// Составьте программу, которая в зависимости от выбора пользователя 
// вычисляет биссектрису или площадь треугольника:

let chose;
let a = parseFloat(prompt("Введите a: "));
let b = parseFloat(prompt("Введите b: "));
let c = parseFloat(prompt("Введите c: "));
let p = (a + b + c)/2;
let s;
let bs;

function square(){
    s = Math.sqrt(p * ((p - a) * (p -b) * (p - c)));
    console.log("Площадь треугольника: " + s);
}

function bisector(){
    let l1 = Math.sqrt(1 - (c ** 2) / ((a + b) ** 2));
    let l2  = ((2 * a * b) / (a + b));
    bs = l1 * l2;
    console.log("Биссектриса треугольника: " + bs);
}

function input(){
    chose = prompt("Что вы хотие?(Найти площадь треугольника = 1/ Найти биссектрису = 2)");
    do{
        if(chose != "1" && chose != "2"){
            console.log("ошибка, неккоректный ввод");
            chose = prompt("Что вы хотие?(Найти площадь треугольника = 1/ Найти биссектрису = 2)");
        }

    }while(chose != "1" && chose != "2");

}

input();

switch(chose){
    case '1':
        square();
    break;

    case '2':
        bisector()
    break;
}

