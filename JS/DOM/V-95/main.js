/*
    DOM [Class List]
    - ClassList
    --- length
    --- contains
    --- item(index)
    --- add
    --- remove
    --- toggle
*/


let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item(0));

// element.onclick = function() {
//     element.classList.add("one", "two");
// };
// element.onclick = function() {
//     element.classList.remove("one", "two");
// };
element.onclick = function() {
    element.classList.toggle("hassan");
};