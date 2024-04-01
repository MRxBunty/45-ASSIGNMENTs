"use strict";
//ASSIGN # 13
let transport = ["car", "motorcycle", "bicycle", "bus"];
//loop
//  for (let i =0; i < transport.length; i++){
//      console.log(` I would to own a ${transport[i]}`);
//  }
//for each
transport.forEach(mode => {
    console.log(` I would to own a ${mode}`);
});
//map()
let num1 = transport.map(transportation => ` ${transport}`);
console.log(num1);
