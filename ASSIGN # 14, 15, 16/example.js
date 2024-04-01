"use strict";
//diffrence between MAP & FOR EACH..
//when you use (each) funtion so you get answer in a list..
//and when you use (map) funtion so you get answer in a Array, same..
Object.defineProperty(exports, "__esModule", { value: true });
//for each
let num = ["1", "2", "3", "4", "5"];
num.forEach(element => {
    console.log(element);
});
//map()
let num1 = num.map(num => ` ${num}`);
console.log(num1);
