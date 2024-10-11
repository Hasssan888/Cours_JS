/*
    DOM [Events]
    - Use Events On HTML
    - Use Event On JS
    --- onclick
    --- oncontextmenu
    --- onmouseenter
    --- onmouseleave

    --- onload
    --- onscroll
    --- onresize

    --- onfocus
    --- onblur
    --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
    console.log("wa hassan");
};

myBtn.oncontextmenu = function () {
    console.log("oncontextmenu");
};

myBtn.onmouseenter = function () {
    console.log("onmouseenter");
};

myBtn.onmouseleave = function () {
    console.log("onmouseleave");
};


Window.onscroll = function () {
    console.log("Scroll");
};

let myInput = document.getElementsByClassName("inp");

console.log(myInput);

myInput.onfocus = function () {
    console.log("onfocus");
};