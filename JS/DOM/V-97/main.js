/*
    DOM [Deal With Elements]
    - before [Element || string]
    - after [Element || string]
    - append [Element || string]
    - prepend [Element || string]
    - remove
*/

let elment = document.getElementById("my-div");
let createdP = document.createElement("p");
let createdS = document.createElement("span");
let createdB = document.createElement("button");
let createdI = document.createElement("input");


elment.before("Hello JS");
elment.before(createdP);

elment.after("Hi Js");
elment.after(createdS);

elment.append("How are you?");
elment.append(createdB);

elment.prepend("I am fin");
elment.prepend(createdI);

elment.remove();