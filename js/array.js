// Задание: Напишите функцию filterEvenNumbers, которая принимает массив чисел 
// и возвращает новый массив, содержащий только четные числа.

let str = prompt("Введите массив чисел: ");
let array = str.split("");

function filterEvenNumbers() {
    for(let i = 0; i <= array.length; i++){
        if(array[i] % 2 == 0){
            console.log(array[i]);
        }
    }

}


filterEvenNumbers();