/*
    DOM [create Elemnets]
    - Practice Product With Heading And Paragraph
*/

// let i;

// i = 0;
// while (i < 100)
// {
//         let myPro = document.createElement("div");
//         let myh3 = document.createElement("h3");
//         let myPara = document.createElement("p");
//         let myTextOne = document.createTextNode("Book");
//         let myTextTwo = document.createTextNode("After a mysterious letter arrives, Alex, an ordinary librarian, is thrust into a world of forgotten ");

//         myh3.appendChild(myTextOne);
//         myPara.appendChild(myTextTwo);
//         myPro.setAttribute("class", "producte");
//         myPro.appendChild(myh3);
//         myPro.appendChild(myPara);

//         document.body.appendChild(myPro);
//     i++;
// }

let i = 0;
while (i < 10)
{
    let myElement = document.createElement("div");
    let myHeading = document.createElement("h2");
    let myParagraph = document.createElement("p");

    let myHeadingText = document.createTextNode("Profuct Title");
    let myParagraphText = document.createTextNode("Product Description");

    myElement.className = "product";

    // Add Heading Text 
    myHeading.appendChild(myHeadingText);

    // Add Paragraph Text
    myParagraph.appendChild(myParagraphText);

    // Add Heading To Element
    myElement.appendChild(myHeading);
    myElement.appendChild(myParagraph);


    document.body.appendChild(myElement);
    i++;
}

