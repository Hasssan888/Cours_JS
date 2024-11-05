/*
    Regular Expression
    
    Quantifiers
    $  => End with Something
    ^  => Start With Something
    ?= => Followed By Something
    ?! => Not Followed By Something
*/

let myString = "We Love Programming";
let names = "10samaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString));
console.log(/^we/ig.test(myString));
console.log(/lz$/ig.test(names));
console.log(/^\d/ig.test(myString));

console.log(names.match(/\d\w{5}(?=Z)/ig));
console.log(names.match(/\d\w{8}(?!Z)/ig));

