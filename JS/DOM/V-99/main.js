/*
    DOM [Cloning]
    - cloneNode(Deep)
*/

// let myP = document.querySelector("p");
let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`;

console.log(myP);

myDiv.appendChild(myP);