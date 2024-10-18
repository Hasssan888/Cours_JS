/*
    Destructuring
    - Destructuring Array Advanced Examples
*/

let myFriends = ["Ahmed", "Sayd", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][1]);

let [ , , , [a, , [ , b]]] = myFriends;

console.log(a); // Shady
console.log(b); // Gamal