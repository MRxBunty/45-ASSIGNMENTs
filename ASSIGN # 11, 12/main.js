"use strict";
//ASSIGN # 11
//array
Object.defineProperty(exports, "__esModule", { value: true });
//define an array of name
let names = ["Raheel", "Ghani", "Zahir",];
// loop
// for each
// for of loop
//loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
} //i = index
// for each
names.forEach((name) => {
    console.log(name);
});
// for of loop
for (let broname of names) {
    console.log(broname);
}
// its my opinion for of each its easy to use..
//ASSIGN # 12
for (let i = 0; i < names.length; i++) {
    console.log(`hello, ${names[i]} how are  you today?`);
}
//for each
names.forEach((name) => {
    console.log(`hi, ${name}! how are you today?`);
});
// for of loop
for (let broname of names) {
    console.log(`Dear, ${broname}! how are you today?`);
}
//ASS
