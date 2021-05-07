"use strict";

//  1


var a = 1;

var b = a++;

var c = ++a;

console.log(a);
console.log(b);
console.log(c);

var d = "hello";

var e = "false";

d++;
e++;

console.log(typeof d);


var perplexed;

console.log(perplexed + 2);

var price = 2.7;
console.log(price.toFixed(2));

// var price = "2.7";
// console.log(price.toFixed(2));

console.log(isNaN(0));

console.log(isNaN(1));

console.log(isNaN(""));

console.log(isNaN("string"));

console.log(isNaN("0"));

console.log(isNaN("1"));

console.log(isNaN("3.145"));

console.log(isNaN(Number.MAX_VALUE));

console.log(isNaN(Infinity));

console.log(isNaN("true"));

console.log(isNaN(true));

console.log(isNaN("false"));

console.log(isNaN(false));

console.log(isNaN == isNaN);

console.log(!true);

console.log(!false);

console.log(!!true);

console.log(!!false);

console.log(!!0);

console.log(!!!-0);

console.log(!!1);

console.log(!!-1);

console.log(!!0.1);

console.log(!!"hello");

console.log(!!"");

console.log(!!"false");

console.log(!!"0");





// 2
// var sample = "Hello Codeup";
// Use .length to find the number of characters in the string.
//     Try to make the sample string all upper or all lower case.
// Update the variable sample via concatenation so that it contains "Hello Codeup Students".
//     Replace "Students" with "Class".
//     Find the index of "c" using .indexOf(). What do you observe?
//     Find the index of "C" using .indexOf().
//     Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
//     Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//
//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
//     A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
//     Use the following code to follow the instructions below:
//
//
//     var username = 'codeup';
// var password = 'notastrongpassword';
// Create a variable that holds a boolean value for each of the following conditions:
//
//     the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace


var sample = "Hello Codeup";

console.log(sample.length);

console.log(sample.toUpperCase());
console.log(sample.toLowerCase());

var sampleStudents = sample + "Students";
console.log(sampleStudents);

console.log(sampleStudents.replace());


// 3















