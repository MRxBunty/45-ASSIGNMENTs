// //ASSIGN # 21

// import { loadEnvFile } from "process";

// // in object what we learned
// //default type object
// //update propery
// //add new property
// // define custom type property
// //use any with object

// //they thin of you something yoou could store in atype script object .with a program  that create objects containing these items.

let student = {
    name: "Raheel",
    rollnumber : 21,
    grade: [85,90,75]
};
console.log (student)// if you want all of these so use this console,

//when you want one specific thing,
//console.log(student.name); ..........( only for name )
//console.log(student.rollnumber); ..........( only for rollnumber)
//console.log(student.grade); ..........( only for grade )
//console.log(student.grade[1]); ......(if you want specific number from grade for grade with any number expl{ 0, 1, 2, } and number start from 0 ,)

let product ={
    name: "laptop",
    price: 10000,
    color: "black",
    size: "13 inch",
    descreption: "high pefomace laptop with fast processor core i5 with ssd "
}

console.log(product);

// type interface 

interface person{
    name: string;
    age: number;
    height: string;
    descreption: string;
    city: string;
}

let person1: person = {
    name: "Raheel",
    age: 18,
    height: "5.8 feet",
    descreption: "i am 18 years old and now iam in full depression ",
    city: "karachi"
}
let person2 :person = {
    name: "Yasir",
    age: 18,
    height: "5.7 feet",
    descreption: "he is Raheel best freind",
    city: "lahore"
}

console.log(person1);

console.log(person2);


// type annotation
let myvariable: string ="HELLO";

//type infers
let anothervariable = `RAHEEl`

//intial object

let me: { name: string, age: number, height: string, city: string,country?: string} = {
    name: "Raheel",
    age: 18,
    height: "5.8 feet",
    city: "karachi"
};

//updated property

me.age = 20;
me.city = "new york"
person1.descreption = "and now i am world richest MAN huuu",
person1.age = 20,
person1.city = "New York"

console.log(person1);

//console.log(me);

//add new property
me["country"] = "USA"

console.log(me);

//define custom type property


//any property
let myVariable: any;

myVariable = 10;

myVariable = "hello";

myVariable = true;

let objectcontainingitems: {[key:string]: any} = {
    "laptop":{
        name: "laptop",
        price: 10000,
        color: "black",
        size: "13 inch",
        descreption: "high pefomace laptop with fast processor core i5 with ssd "
    },
    "mouse": {
        name: "mouse",
        price: 1000,
        color: "black",
        size: "5 inch",
        descreption: "high pefomace and smooth sesitivity"
    },
    "keyboard": {
        name: "keyboard",
        price: 1000,
        color: "black",
        size: "12 inch",
        descreption: "high pefomace and smooth sesitivity"
    
}
}

console.log(objectcontainingitems);