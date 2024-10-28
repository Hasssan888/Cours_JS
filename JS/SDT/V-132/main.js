/*
    Spread Operator => ...Iterable
    "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String
console.log("osama");
console.log(..."osama");
console.log([..."osama"]);

// Concatenate Arrays
let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);

// Copy Array
let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array
let allFrinds = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFrinds.push(...thisYearFriends);

console.log(allFrinds);

// Use With Math Object
let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects

let objOne = {
    a: 1,
    b: 2,
};

let objTwo = {
    c: 3,
    d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5});