"use strict";



// Write a function named cube(n) that returns n * n * n
// Write a function named cubeRoot(n) that returns the cube root of the input

function cube (number) {
    return number * number * number;
//return math.pow
}
console.log(cube(7 * 7 * 7));

function cubeRoot(num) {
    return Math.cbrt(num);

}
console.log(cubeRoot(7));
