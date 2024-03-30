//ASSIGN # 2 storing a person name in a variable (lowercase ,uppercase)

function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());}
 

let personname: string = "Raheel Javed"

console.log("lowercase:", personname.toLowerCase())

console.log("uppercase:", personname.toUpperCase())

console.log("Title case:", toTitleCase(personname));





