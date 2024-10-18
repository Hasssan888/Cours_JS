/*
    Destructuring
    - Challenge
*/


// let chosen = 3;

// let myFriends = [
//     { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//     { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//     { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// if (chosen === 1)
// {
//     console.log(myFriends[0].title);
//     console.log(myFriends[0].age);
//     console.log(myFriends[0].available);
//     console.log(myFriends[0].skills[1]);
// }
// else if (chosen === 2)
// {
//     console.log(myFriends[1].title);
//     console.log(myFriends[1].age);
//     console.log(myFriends[1].available);
//     console.log(myFriends[1].skills[1]);
// }
// else if (chosen === 3)
// {
//     console.log(myFriends[2].title);
//     console.log(myFriends[2].age);
//     console.log(myFriends[2].available);
//     console.log(myFriends[2].skills[1]);
// }

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let {
  title: empName,
  age,
  available,
  skills: [, lastSkill],
} = myFriends[chosen - 1];

console.log(empName);
console.log(age);
console.log(available ? "available" : "not avialable");
console.log(lastSkill);

