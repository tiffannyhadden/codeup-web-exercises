(function(){
//     "use strict";
//
// //
// // TODO: MINI-EXERCISE
// //  -> var days = ["Monday", "Tuesday", "Wednesday"];
// //  -> Create an array with the remaining days of the week
// //  -> Call .forEach() on that NEW array
// //  -> Inside the inline function you pass into .forEach():
// //      -> add the remainingDay of the week to the old array
// //  -> When the loop completes, console.log() the completed day of the week array
//
//     var days = ["Monday", "Tuesday", "Wednesday"];
//
//    var remainingDaysOfWeek = ["Thursday", "Friday", "Saturday", "Sunday"]
//
//     remainingDaysOfWeek.forEach(function(day) {
//         days.push(day);
//     });
//    console.log(days);
//
//
//     // TODO - MINI EXERCISE
// //  -> Let's reverse engineer our days of the week array
// //  -> Make sure to console.log in order to see your code's behavior!
// //  -> Write a function which takes in your complete days of the week array
// //      -> It will eventually return your reverse-engineered array
// //  -> Using a FOR LOOP (not .forEach())
// //      -> pop() each item off the days array
// //      -> use the returned value from pop() to unshift the element
// //      -> on to the new array
// //  -> HINT: You may find that the loop doesn't behave as expected
// //      -> console.log EVERY possible thing which could change as your loop runs
// //          -> consider how the methods you are using change state of the array
//
// function revEng(arr) {
//     let newArr = [];
//     let arrLength = arr.length;
//     for (let i = 1; i <= arrLength; i++) {
//         console.log(days);
//         console.log("----------------");
//         newArr.unshift(arr.pop());
//         console.log(arr.length);
//     }
//     console.log(arr);
//     console.log(newArr);
//
// }
//
// revEng(days);


// function sortMyNums(num1, num2, num3){
//     var numArray = [num1, num2, num3];
//     console.log(numArray);
//     numArray.sort(function (a, b)) {
//         console.log(a);
//         console.log(b);
//         console.log(a - b);
//         return a - b;
//
//     });
//     console.log(numArray);
//     return numArray;
// }

sortMyNums(13,1,1009);









})();