/*
    DOM [Challenge]
*/


let myHearder = document.createElement("header");

let myLogo = document.createElement("div");
let myList = document.createElement("div");

let myLogoTitel = document.createElement("h1");

let myLogoName = document.createTextNode("Elzero");

let linkOne = document.createElement("a");
let linkTwo = document.createElement("a");
let linkThree = document.createElement("a");
let linkFour = document.createElement("a");

let linkOneText = document.createTextNode("Home");
let linkTwoText = document.createTextNode("About");
let linkThreeText = document.createTextNode("Service");
let linkFourText = document.createTextNode("Contact");

//div one
myLogoTitel.appendChild(myLogoName);
myLogo.appendChild(myLogoTitel);
myLogo.className = "logo";

// div two

linkOne.appendChild(linkOneText);
linkTwo.appendChild(linkTwoText);
linkThree.appendChild(linkThreeText);
linkFour.appendChild(linkFourText);

linkOne.setAttribute("href", "#");
linkTwo.setAttribute("href", "#");
linkThree.setAttribute("href", "#");
linkFour.setAttribute("href", "#");

myList.className = "links";
myList.appendChild(linkOne);
myList.appendChild(linkTwo);
myList.appendChild(linkThree);
myList.appendChild(linkFour);

myHearder.className = "my-hearder";
myHearder.appendChild(myLogo);
myHearder.appendChild(myList);

// style CSS use Js
myHearder.style.display = "flex";
myHearder.style.alignItems = "center";
myHearder.style.justifyContent = "space-between";
myHearder.style.backgroundColor = "white";
myHearder.style.padding = "0px 15px";


myLogoTitel.style.color = "#15B392";

linkOne.style.textDecoration = "none";
linkTwo.style.textDecoration = "none";
linkThree.style.textDecoration = "none";
linkFour.style.textDecoration = "none";

linkOne.style.color = "#4A4947";
linkTwo.style.color = "#4A4947";
linkThree.style.color = "#4A4947";
linkFour.style.color = "#4A4947";

linkOne.style.marginRight = "12px";
linkTwo.style.marginRight = "12px";
linkThree.style.marginRight = "12px";
linkFour.style.marginRight = "12px";

linkOne.style.fontSize = "19px";
linkTwo.style.fontSize = "19px";
linkThree.style.fontSize = "19px";
linkFour.style.fontSize = "19px";


document.body.appendChild(myHearder);
console.log(myHearder);


let myContent = document.createElement("div");

myContent.style.display = "flex";
myContent.style.flexWrap = "wrap";
myContent.style.alignItems = "center";
myContent.style.justifyContent = "center";


let i = 1;
while (i <= 15)
{

    let myCard = document.createElement("div");
    let myh1 = document.createElement("h1");
    let myP = document.createElement("p");
    let myh1Text = document.createTextNode(`${i}`);
    let myPText = document.createTextNode("Product");
    
    myh1.appendChild(myh1Text);
    myP.appendChild(myPText);
    
    myCard.appendChild(myh1);
    myCard.appendChild(myP);
    myCard.className = "my-cards";
    myCard.style.backgroundColor = "white";
    myCard.style.display = "flex";
    myCard.style.flexDirection = "column";
    myCard.style.alignItems = "center";
    myCard.style.justifyContent = "center";
    myCard.style.width = "32%";
    myCard.style.borderRadius = "8px";

    myCard.style.margin = "10px 10px 10px 10px";
    myContent.appendChild(myCard);
    
    i++;
}
document.body.appendChild(myContent);

document.body.style.backgroundColor = "#A9A9A9";

let myFooter = document.createElement("footer");
let myText = document.createTextNode("Copyright 2024");

console.log(myFooter);
myFooter.appendChild(myText);

document.body.appendChild(myFooter);

myFooter.style.backgroundColor = "#15B392";
myFooter.style.textAlign = "center";
myFooter.style.color = "white";
myFooter.style.padding = "37px 37px 37px 37px";

document.body.style.overflow = "hidden";
document.body.style.padding = "0px 0px 0px 0px";
document.body.style.margin = "0px 0px 0px 0px";

// document.body.style.flexDirection = "column";
// document.body.style.justifyContent = "space-bettwen";

// document.body.style.width = "90%";