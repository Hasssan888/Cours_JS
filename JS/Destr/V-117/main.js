/*
    Destructuring
    - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

console.log(`book = ${book}`);
console.log(`video = ${video}`);
// // Save Book Value In Stash
// let stash = book; // Video 

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video


[book, video] = [video, book];


console.log("==========================================");

console.log(`book = ${book}`);
console.log(`video = ${video}`);
