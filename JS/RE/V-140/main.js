/*
    Regular Expression

    Quantifiers
    n+    => One Or More
    n*    => zero or more
    n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails

// let mailRe = /\w+@\w+.(com|net)/ig;
let mailRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailRe));

let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or no 0

let numsRe = /0\d*0/ig;
console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https

let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsRe));
