let ignoreNumbers = "Hassa4468n411bak45446krim487";

// let ing = ignoreNumbers.split("").map(function(a){
//     return isNaN(parseInt(a)) ? a : "";
// }).join("");

let ing = ignoreNumbers
.split("").
map((a) => isNaN(parseInt(a)) ? a : "")
.join("");
console.log(ing);

let num = [11, 22,65,44, 243, 98];

let n = num.filter(function(a){
    return a % 2 === 0;
});
console.log(n);

let s = "I Love Foood Code Too Playing Much";

let smallWords = s.split(" ").filter(function(a){
    return a.length <= 4;
}).join(" ");

console.log(smallWords);

let i = ignoreNumbers.split("").filter(function(a){
    return isNaN(parseInt(a));
}).join("");

console.log(i);

let mix = "A13BS2ZX";

let mixedContent = mix.split("").filter(function(a){
    return !isNaN(parseInt(a));
}).map(function(b){
    return (b * b);
}).join("");

console.log(mixedContent);

let removeChars = ["H", "#", "a", "#", "#", "s", "#","s","#", "a","#" ,"n"];

let f = removeChars.filter(function(a){
    return !a.startsWith("#");
}).reduce(function(a, c){
    return `${a}${c}`;
});

console.log(f);

let allLis =  document.querySelectorAll("ul li");
let allDivs =  document.querySelectorAll(".content div");

allLis.forEach(function(a){
    a.onclick = function(){
        allLis.forEach(function(a){
            a.classList.remove("active");
        });
        this.classList.add("active");
        allDivs.forEach(function(a){
            a.style.display = "none";
        });
    };
});

/*
    Higher Order Function Challenges

    You Can Use
    - ,
    - _
    - Space
    - True => 1 => One Time Only In The Code

    You Cannot Use
    - Numbers
    - Letters

    - You Must Use [Filter + Map + Reduce + Your Knowledge]
    - Order Is Not Important
    - All In One Chain
*/


// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split("").filter(function(a){
//     return a !== ',' && isNaN(parseInt(a));
// }).reduce(function(a, c){
//     return a + c;
// }).split("_").map(function(a){
//     let i = 0;
//     while (i < a.length - 1)
//     {
//         if (a[i] === a[i + 1])
//             a = a.replace(a[i], "");
//         i++;
//     }
//     return a;
// })

// console.log(solution); // Output: Elzero Web School