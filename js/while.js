"use strict";



var i = 0;
for(i=0; i<=25; i++){
// let's divide the value by 2.
// if the remainder is zero then it's an even number.
    if(i % 2 == 0){
        console. log(i);
    }
}


var password;

while (password !== "purple") {
    password = prompt("What is the password?");


}





var x = 2;

while (x < 65537) {
    console.log(x);
    x *= 2;

}


var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);

do {
    console.log('Start of the day i have ' + allCones + ' left');
    var customCones = Math.floor(Math.random() * 5) + 1;

    if(customCones <= allCones) {
        console.log(customCones + ' cones sold');
        allCones = allCones - customCones;

    } else if (allCones === 0) {
        console.log('I can go Home!');
    } else {
        console.log('I do not have enough cones to sale');
    }

} while(allCones !== 0);