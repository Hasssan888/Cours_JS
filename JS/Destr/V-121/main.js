/*
    Destructuring
    - Destructuring Mixed Content
*/

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
        egypt: "Cairo",
        ksa: "Riyadh",
    },
};

const {
    theName: n,
    theAge: a,
    // skills: [one, two, three],
    // skills: [one, ,three],
    skills: [ , , three],
    addresses: { egypt: e},
} = user;

console.log(`Your Name Is ${n}`);
console.log(`Your Age Is ${a}`);
// console.log(`Your  Skills  Is ${one} ${two} ${three}`);
// console.log(`Your  Skills  Is ${one} ${three}`);
console.log(`Your  Skill  Is ${three}`);
console.log(`Your Live In: ${e}`);