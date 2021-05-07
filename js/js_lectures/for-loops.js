// ex.

// egg cartons. how many egg cartons can you fill? start at zero eggs and iterate by 1. 72 eggs
// we filled x amount of egg cartons

// if statement inside a for loops
// // initialize cartons
// // for with eggs as the iterating variable
// var carton = 0;
// for(let eggs = 1); eggs <= 72; eggs++ ){
//     if(eggs % 12 == 0){
//         carton ++;
//     }
//     console.log(`carton`);
// }
//
//
//
//
//
//
// // TODO: Loop through a set of numbers (0-30), if the number you're currently at is even, add 2 to it. If it's an
// //  odd number, print "odd"
// // // HINT: remember the remainder operator (modulo)

for(var i = 0; i < 29; i++) {
   if( i % 2 === 0){
      console.log( i + 2);
   } else {
      console.log("odd");
   }
}









// // TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  If it's neither print "I'm not playing"
//  Print "marco polo" if it's divisible by 3 and 5.



for (let i = 0; i <= 40; i++) {
   if (i % 5 == 0 && i % 3 == 0) {
      console.log("marco polo");
   } else if (i % 3 == 0) {
      console.log("marco")
   } else if (i % 5 == 0) {
      console.log("polo")
   } else {
      console.log( "i'm not playing");
   }
}




