// Задание: Напишите функцию isPalindrome, 
// которая принимает строку и проверяет, является ли она палиндромом.

let str = prompt("Введите строку: ");

function isPalindrome(){
    for(let i = 0; i < str.length; i++){
        if(str[i] == str[str.length - i]){
            console.log("Это палиндром");
        }
        else{
            console.log("Это не палиндром");
        }
    }
}

isPalindrome();