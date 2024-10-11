

let myTask = document.querySelector(".my-div");
let mybtn = document.createElement("button");
let myText = document.createTextNode("Delete");
let myAdd  = document.querySelector(".add");
let myInp = document.querySelector("#inp");


let TextFromInp;

// document.forms[0].onsubmit = function (e) {
    
// }

// console.log(myAdd);
// myAdd.onclick = function () {
//     console.log(myInp.value);
//     // console.log("click");
// };
mybtn.appendChild(myText);
myTask.appendChild(mybtn);
document.body.appendChild(myTask);

// console.log(12323);