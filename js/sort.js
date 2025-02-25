//Написать программу, которая методом обмена ("пузырька") сортирует по убыванию
//введенный с клавиатуры одномерный массив.

let str = prompt("Введите массив: ");
let arr = str.split('').map(Number);
let n = arr.length;
let flag;

function sort(){
    do{
        flag = false;
        for(let j = 0; j < n - 1; j++){
            if(arr[j] < arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = true;
            }
        }
    }while(flag);
    return arr;
}

sort();
console.log(arr);