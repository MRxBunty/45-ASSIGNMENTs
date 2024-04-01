"use strict";
//ASSIGN # 14.............................................../
//define array of guest
Object.defineProperty(exports, "__esModule", { value: true });
let guestlist = ["Yasir", "Raheel", "Faraz"];
//for each
//  guestlist.forEach(guest => {
//      console.log(` Dear ${guest}, you are cordially invited to dinner `);
//  });
//for map
let invited = guestlist.map(guest => ` Dear ${guest}, you are cordially invited to dinner`);
console.log(invited);
//ASSIGN # 15.............................................../
let guestlist1 = ["Yasir", "Raheel", "Faraz"];
//print the name who can,t come to dinner.?
let unableattend;
unableattend = guestlist.splice(1, 1)[0];
console.log(`${unableattend} can,t come to dinner bcz he,s busy`);
guestlist.push("ABDUL GHANI");
//console.log(guestlist);
//for each
guestlist.forEach(guest => {
    console.log(` Dear ${guest}, you are cordially invited to dinner `);
});
// ASSIGN # 16................................................/
console.log("great news! we found a bigger table, so we was invited more guest, yeahhh...");
//unshift
guestlist1.unshift("ABDUL GHANI");
console.log(guestlist1);
//splice
guestlist1.splice(Math.floor(guestlist1.length / 2), 0, " ABDUL ZAHIR");
//push
guestlist1.push("ARMAN");
console.log(guestlist1);
//for each
guestlist1.forEach(guest => {
    console.log(` Dear ${guest}, you are all cordially invited to dinner (plz come to time) `);
});
