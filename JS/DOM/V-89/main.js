/*
    DOM [Create Elements]
    - createElement
    - createComment
    - createTextNode
    - createAttribute
    - appendChild
*/

let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing");

myElement.appendChild(myComment);

myElement.appendChild(myText);



console.log(myElement);
document.body.appendChild(myElement);