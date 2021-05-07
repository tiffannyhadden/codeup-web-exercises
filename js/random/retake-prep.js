// Write a function called getSquare. It should take in one input and return the square (not square root) of that input as a number. If the input is not a number or numeric string, getSquare should return false.
// function getSquare(input) {
//    if(input === null || isNaN(Number(input ))) {
//        return false;
//    } else {
//        return (Math.pow(input, 2));
//    }
// }
// console.log(getSquare())


// /*Write a function called getReverse. It should take in one input and return the same string, in reverse. If the input is not a string (a number, boolean, etc) or is a numeric string ("45"), then return false.*/}


// function getReverse(string){
//     if (typeof string === "string" ){
//         // return string.reverse
//         return string.split("").reverse().join("");
//     }else{
//         return false;
//     }
// }


// function lowerCase(input) {
//     if(typeof input=== 'string') {
//         return input.toLowerCase()
//
//     } else {
//         return false;
//     }
// }
// function reverse(s){
//     return s.split("").reverse().join("");
// }

// Write a function called multiplySquares(). It should take in two inputs, square each input, then return the product of mulitplying them together. If the input is not a number (5) or numeric string ("5"), the method should return false

// function multiplySquares(input1, input2) {
//
//
//     function multiplySquares(input1, input2){
//         if (input1 === null || input2 === null || isNaN(Number(input1)) || isNaN(input2)){
//             return false;
//         }else{
//             return (Math.pow(input2 , 2) * Math.pow(input1, 2)  );
//         }
//         console.log(multiplySquares('cat' , 2))
//
// rite a function called addTo. It should take in one input and return the result of adding 3 to that input. If the input is not a number or numeric string, addTo should return false
//  function addTo(input) {
//     input = parseInt(input);
//     if(isNaN(input)) {
//         return false;
//     }
//     input += 3;
//     return input;
//  }
// // Write a function called subtractFrom. It should take in one input and return the result of subtracting 3 from that input. If the input is not a number or numeric string, subtractFrom should return false.
// function subtractFrom(input1) {
//     if(isNaN(parseInt(input1))) {
//         return false;
//     }
//     input1 -= 3;
//     return input1;
// }
// console.log(subtractFrom())
// // Write a function called getLowestNumber. It should take in three inputs and determine which input is the lowest number. If ANY of the inputs are not numbers or numeric strings, getLowestNumber should return false
//
// function getLowestNumber(input1, input2, input3) {
//     if(isNaN(parseFloat(input1)) || isNaN(parseFloat(input2)) || isNaN(parseFloat(input3)))  {
//         return false;
//     } else {
//         return Math.min(input1, input2, input3);
//     }
// }
//
// console.log(getLowestNumber(10, 23, 5637347347))

// Write a function called isAString. It should take in one input and return true if the input is a string. If the input is not a string, then return false

// function isAString(input) {
//     if(typeof input === "string") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isAString(true))

