let original = {
    name: "Anton",
    age: 20,
    city: "SAMARA",
};

function output_1(){
    console.log(original.name);
    console.log(original.age);
    console.log(original.city);
}

output_1();
console.log("----------------");

function copyObj(){
    return Object.assign({}, original);
}

let copy = copyObj();

function output_2(){
    console.log(copy.name);
    console.log(copy.age);
    console.log(copy.city);

}

output_2();
