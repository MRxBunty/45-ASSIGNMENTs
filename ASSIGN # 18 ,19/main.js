//ASSIGN # 18 ............................................................................................//
var fvrtplace = ["SAUDIA ARAB", "PHALESTINE", "sWITZERLAND", "JAPAN", "CHINA"];
// print the original order
console.log("ORIGINAL ORDER", fvrtplace);
//print same message in ALPHABETICAL without modifying previus message,
console.log("ALPHABETICAL order", fvrtplace.slice().sort());
//array still in original order by printing its.
console.log("ORIGINAL ORDER", fvrtplace);
// print array in reverse alphabetical order without changing the order of the original list.
console.log("REVERSE ALPHABETICAL order", fvrtplace.slice().sort().reverse());
//array still in original order by printing its again.
console.log("ORIGINAL ORDER", fvrtplace);
//revesre the order of your list .print the array to show that its order has been  changed.
console.log("reverse order changed");
fvrtplace.reverse();
console.log(fvrtplace);
//array still in original order by printing its again.
console.log("ORIGINAL ORDER", fvrtplace.sort);
console.log(fvrtplace);
//sort array so it,s stored in alphabetical order. print the array to show thats it order has been changed.
console.log("reverse alphabetical order changed", fvrtplace.sort().reverse());
console.log(fvrtplace);
//ASSIGN # 19 ............................................................................................//
//dinner guest working with one of the program from exercide 14 through 18 print a indicating number of people you inviting to dinner....
//ASSIGN # 17 (same work in ass 19)........................//
//print message 
var guestlist = ["Yasir", "Raheel", "Faraz"];
console.log("ooops unfortunately! the new dinner table wont arrive so we can invite only 2 guest,");
//use unshift
guestlist.unshift("Zahir", "Ghani");
//print message updated list
console.log("updated list of guest:", guestlist);
//remove guest from the list
while (guestlist.length > 2) {
    var removedguest = guestlist.pop();
    if (removedguest !== undefined) {
        console.log("sorry, ".concat(removedguest, ", we cant invite you"));
    }
}
//print a message to each of the two people  still in your list,
guestlist.forEach(function (guest) {
    console.log("dear ".concat(guest, ",you both are invited for the dinner"));
});
//remove 2(all) name in a guestlist
guestlist.splice(0, guestlist.length);
//print update empty list
console.log("updated list of guest:", guestlist);
