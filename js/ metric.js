// В зависимости от выбора пользователя напечатать таблицу перевода 
// расстояний в дюймах в сантиметры (1 дюйм = 2, 54 см) или расстояний в 
// сантиметрах в дюймы для значений от A до B с шагом D.

let a = parseFloat(prompt("Введите a: ")); 
let b = parseFloat(prompt("Введите b: "));;

let d = parseFloat(prompt("Введите шаг: "));;

let choice = prompt("дюймы => сантиметры (1) / сантиметры => дюймы(2)");

function processing_1 (){

    for(let i = 0; i <= b; i = i + d){
        let result1 = i * 2.54;
        console.log("дюйм: " + i + " сантиметр: " + result1);
    }
}

function processing_2 (){

    for(let i = 0; i <= b; i = i + d){
        let result2 = i / 2.54;
        console.log("сантиметр: " + i + " дюйм: " + result2);
    }
}

switch(choice){
    case '1':
        processing_1();
    break;
    
    case '2':
        processing_2();
    break;
        
}