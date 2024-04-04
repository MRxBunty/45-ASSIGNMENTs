"use strict";
//ASSIGN # 17........................................//
//print message 
//continue as assign no 16..
let guestlist = ["Yasir", "Raheel", "Faraz"];
console.log("ooops unfortunately! the new dinner table wont arrive so we can invite only 2 guest,");
//use unshift
guestlist.unshift("Zahir", "Ghani");
//print message updated list
console.log("updated list of guest:", guestlist);
//remove guest from the list
while (guestlist.length > 2) {
    let removedguest = guestlist.pop();
    if (removedguest !== undefined) {
        console.log(`sorry, ${removedguest}, we cant invite you`);
    }
}
//print a message to each of the two people  still in your list,
guestlist.forEach(guest => {
    console.log(`dear ${guest},you both are invited for the dinner`);
});
//remove 2(all) name in a guestlist
guestlist.splice(0, guestlist.length);
//print update empty list
console.log("updated list of guest:", guestlist);
