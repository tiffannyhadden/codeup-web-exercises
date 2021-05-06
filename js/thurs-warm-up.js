"use strict";

// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
// If either of the arguments are not a numeric string or number, return a string message indicating which argument is not a number/numeric string

function remainder(number, divisor) {
if(isNaN(number) || isNaN(divisor)) {
    return false;
} else {
    return number % divisor
}
}