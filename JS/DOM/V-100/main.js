/*
    DOM [Add Event Listener]
    - addEventListener
    - Use Without On
    - Attach Multiple Events
    - Error Test

    Search
    - Captur && Bubbling JavaScript
    - removeEventListener
*/

let myP = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//     console.log("Message Form OnClick 1");
// };

// function two() {
//     console.log("Message Form OnClick 2");
// };

// window.onload = "HASSAN";

// myP.addEventListener("click", function(){
//     console.log("Message Form OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);
// myP.addEventListener("click", "string"); // Error

myP.onclick = function () {
    let newP = myP.cloneNode(true);
    newP.className = "clone";
    document.body.appendChild(newP);
};

// let cloned = document,querySelector(".clone"); // Error

// cloned.onclick = function () {
//     console.log("Iam Cloned");
// };

document.addEventListener("click", function(e){
    if (e.target.className === "clone")
        console.log("Iam Cloned");
});