let user = {
    name: "ILNAZ",
    age: 19,
    "like cars": true,
}

console.log(user.name);
console.log(user.age);

user.gender = "male";
console.log(user.gender);

user.gender = "female";
console.log(user.gender);

delete user.gender;
console.log(user.gender);

console.log(user["like cars"]);

delete user["like cars"];
console.log(user["like cars"]);

