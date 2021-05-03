
// // Make a function named `isOdd(number)`
//
// function isOdd(number) {
//  var remainder = number % 2;
//
//     return remainder % 2 !== 0;
// }
//
//
// console.log(isOdd(7));
//
//
//
//
//     function isEven(number) {
//         return number % 2 === 0;
//     }
//     console.log(isEven(4));
//
//     //
//     // - Make a function named `isTrue(boolean)`
//     // - Make a function named `isFalse(boolean)`
//
// function isTrue(boolean) {
//     return boolean === true;
// }
// console.log(isTrue(true));
//
// function isFalse(boolean) {
//     return boolean === false;
//
// }
// console.log(isFalse(true));
//
//     function isBoolean(value) {
// return typeof value === 'boolean';
//
//     }
//
//     function isBoolean(value) {
//         return value === false || value === true;
//     }
//
// function testFalsy(input) {
//         return input === false; // the value of input is equal to the value 'false'
// }
//
//     // Write a function called `subtract(a, b)` that return the difference between
//     // the two inputs.
//     // - Write `multiply(a, b)` function that returns the product
//     // - Write a `divide(numerator, denominator)` function that returns a divided by b


//     function subtract(num1, num2) {
// //     return parseFloat(num1) - parseFloat(num2);
// // }
// // function multiply(num1, num2) {
// //     return parseFloat(num1) * parseFloat(num2);
// // }
//
//
//         function subtract (numberA, numberB) {
//             return numberA - numberB;
//         }

        // // This function determines if the first character in the specified string is a number. If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string.
        // function subtract(numberA, numberB){
        //     if(isNaN(parseFloat(numberA)) || isNaN(parseFloat(numberB)) || (typeof numberA === "boolean" || typeof numberB === "boolean")) {
        //         return false;
        //     } else {
        //         return parseFloat(numberA) - parseFloat(numberB);
        //     }
        // }
        //
        //
        //
        //
        //
        // function multiply (numberA, numberB) {
        //     return numberA * numberB;
        // }
        //
        // function divide (numberA, numberB) {
        //     return numberA / numberB;
        // }}

        //
        // function multiplyIfNumeric(input1, input2) {
        //     var product = Number(input1) * Number(input2)
        //
        //     if (isNaN(product)) {
        //         console.log("Product is Nan");
        //         return false;
        //     } else {
        //         console.log("Product is a number");
        //         return product;
        //     }
        //
        //
        // }
        // console.log(multiplyIfNumeric(4, 2));


// write a function called toUppercase which takes in one input and returns that input in uppercase IF (and only if) the input is a non- numeric string
// otherwise, return false

// function upperCase(input) {
//     if(typeof input === 'string' && isNaN(input)) {
//             return input.toUpperCase()
//      {
//             return false;
//     }
// }
//
// console.log(upperCase("dog"));


// TODO: write a function called stickyCaps which takes in an input and returns that input in sticky caps
//  ie: dog -> dOg, software developer -> sOfTwArE dEvElOpEr
//  -> You may be using a few different string methods
//  -> If the input is numeric or not a string, return false

function stickyCaps(str) {

        str = str.toLowerCase();

        let stickyArr = str.split("");
 // console.log(stickyArr)
        let wordsCased = [];

        for (let i = 0; i < stickyArr.length; i++) {
            if( i % 2 === 0) {
                wordsCased.push(stickyArr[i].toUpperCase());
            } else {
                wordsCased.push(stickyArr[i].toLowerCase());
            }
        }
        return wordsCased.join("");

}
     console.log(stickyCaps(100))
// function endsWithVowel(string) {
//     string = string.toLowerCase();
//     var lastLetter = string.length - 1;
//     console.log(lastLetter)
//     return (string.charAt(lastLetter) === "a" || string.charAt(lastLetter)  === "e"|| string.charAt(lastLetter)  === "i"|| string.charAt(lastLetter)  === "o" || string.charAt(lastLetter)  === "u");
//
// string = string.toLowerCase();
// var lastLetter = string.length -1;
// return (string.charAt(lastLetter) === "s") || string.charAt(lastLetter === "f") ||






