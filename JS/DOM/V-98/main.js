/*
    DOM [Traversing]
    - nextSibling
    - previousSibling
    -nextElementSibling
    - previousElementSibling
    - parentElement
*/

let span = document.querySelector(".two");

console.log(span.nextSibling);
console.log(span.previousSibling);

console.log(span.nextElementSibling);
console.log(span.previousElementSibling);

console.log(span.parentElement);

span.onclick = function() {
    // span.parentElement.style.opacity = "0";
    // Or
    span.parentElement.remove();
};

