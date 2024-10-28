/*
    Regular Expression

    Ranges

    - Part 1
    (X|Y) => X Or Y
    [0-9] => 0 To 9
    [^0-9] => Any Character Not 0 To 9
    Practice 

    - Part 2
    [a-z]
    [^a-z]
    [A-Z]
    [^A-Z]
    [abc]
    [^abc]
*/

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/ig;
console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-9]/g;
console.log(nums.match(numsRe));

let num = "12345678910";
let numRe = /[0-2]/g;
console.log(num.match(numRe));

let notNum = "12345678910";
let notNumRe = /[^0-2]/g;
console.log(notNum.match(notNumRe));

let specialNum = "1!2@#$%678910";
let specialNumRe = /[^0-9]/g;
console.log(specialNum.match(specialNumRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe));

console.log("################ prt 2 ############################");

let myString = "AaBbcdefG1234%^&*";

let atozSmall = /[a-z]/g;
console.log(myString.match(atozSmall));

let notAtozSamll = /[^a-z]/g;
console.log(myString.match(notAtozSamll));

let atozCapital = /[A-Z]/g;
console.log(myString.match(atozCapital));

let notAtozCapital = /[^A-Z]/g;
console.log(myString.match(notAtozCapital));

let aAndcAnde = /[ace]/g;
console.log(myString.match(aAndcAnde));

let notaAndcAnde = /[^ace]/g;
console.log(myString.match(notaAndcAnde));

let lettersCapsAndSmall = /[a-zA-Z]/g;
console.log(myString.match(lettersCapsAndSmall));

let numAndSpecials = /[^a-zA-Z]/g;
console.log(myString.match(numAndSpecials));

let Specials = /[^a-zA-Z0-9]/g;
console.log(myString.match(Specials));