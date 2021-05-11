"use strict";

function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + i * number)
    }
}

showMultiplicationTable(7)


for(let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    // random % 2 === 0 ? console.log(random + " is even!") : console.log(random + " is odd!")
    if( random % 2 === 0) {
        console.log(random + " is even :)")
    } else {
        console.log(random + " is odd :(")
    }
}

for(let i = 1; i < 10; i++) {
    console.log(i.toString().repeat(i));
}

for(let i = 100; i > 1; i--) {
    if(i % 5 === 0) {
        console.log(i)
    }
}



