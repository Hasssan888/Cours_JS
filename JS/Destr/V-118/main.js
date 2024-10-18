/*
    Destructuring
    - Destructuring Object
*/

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.theTitle);
console.log(user.theCountry);

console.log("================================");

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);
// console.log("================================");


// ({theName, theAge, theTitle, theCountry} = user);
// let {Name, Age, Title, Country} = user;

// // console.log(Name);
// console.log(Age);
// console.log(Title);
// console.log(Country);
// console.log("================================");

let { theName, theAge, theTitle, theCountry } = user;

console.log(theName); // "Osama"
console.log(theAge);  // 39
console.log(theTitle); // "Developer"
console.log(theCountry); // "Egypt"
console.log("================================");