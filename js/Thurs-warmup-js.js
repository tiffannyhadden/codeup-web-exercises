"use strict";
// Write a JavaScript program to construct the following pattern, using a nested for loop.
//                                                                                   *
//                                                                                   * *
//                                                                                   * * *
//                                                                                   * * * *
//                                                                                   * * * * *


// Create a for loop that uses console.log to create the output shown below.


//1
//22
//333
//4444
//55555

for(let i = 1; i <= 5; i++) {
    console.log("*".toString().repeat(i));
}
