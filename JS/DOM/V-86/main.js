/*
    DOM
    - What Is DOM
    - DOM Selectors
    --- Find Element By ID
    --- Find Element By Tag Name
    --- Find Element By Class Name
    --- Find Element By CSS Selectors
    --- Find Element By Collection
    ----- title
    ----- body
    ----- images
    ----- forms
    ----- links
*/


let myIdElement = document.getElementById("my-div");
let myTagElement = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQuerElement = document.querySelector(".special");
let myQuerElement2 = document.querySelector("#my-div");
let myQuerElement3 = document.querySelector(".my-span");
let myQuerAllElement = document.querySelectorAll(".my-span");


console.log(myIdElement);
console.log(myTagElement);
console.log(myTagElement[1]);
// myTagElement[1].innerHTML = "Test";
console.log(myClassElement);
console.log(myClassElement[1]);
console.log(myQuerElement);
console.log(myQuerElement2);
console.log(myQuerElement3);
console.log(myQuerAllElement);
console.log(myQuerAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.forms[1].two.value);
console.log(document.links[0].href);