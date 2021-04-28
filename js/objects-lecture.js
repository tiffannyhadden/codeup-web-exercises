// "use strict";
// new object isntance
// var losSpurs = new Object();
// console.log(typeof losSpurs);

//
//
// object literal:
// var theSpurs = {};
//
// console.log(typeof theSpurs);

//
// var aboutMe = new Object();
// console.log(typeof aboutMe);
//
//
// var thisIsMe = {};
// console.log(typeof thisIsMe);

    //
    // var thisIsMe = {
    // name: "Tiffanny",
    // favFood: "pizza",
    // age: 32,
    // city: "San Antonio",
    // yrBorn: 1988,
    // };


// using dot notation (losSpurs)

// var losSpurs = new Object();
// console.log(losSpurs);
// //
// // // nameOfObject.nameOfProperty = value
// // losSpurs.coach = "Gregg";
// // losSpurs.mascot = "coyote";
// // losSpurs.fans = "the best";
// // console.log(losSpurs);
//
// // bracket notation
//
// // var daMavs = {};
// //
// // // brackets and quotes
// // // nameOfObject[nameOfProperty];
// //
// // daMavs["city"] = "Dallas";
// // daMavs["wins"] = 1;
// // console.log(daMavs)
//
// // var thisIsMe = {};
//
//
// // thisIsMe.name = "Tiff";
// // console.log(thisIsMe);
// // losSpurs.mascot = "coyote";
// // losSpurs.fans = "the best";
// // console.log(losSpurs);
//
// // var thisIsMe = {};
// // thisIsMe["city"] = "SA";
// // thisIsMe["age"] = 32;
// // thisIsMe["vehicle"] = "toyota tundra";
// //
// // console.log(thisIsMe);
//
//
//
//
// // TODO: create an empty 'yourFaveSportsTeam' object using object literals
//
// var theSaints = {};
//
// console.log(typeof theSaints);
//
//
// // TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
//
// // nameOfObject.nameOfProperty = value
// theSaints.city = "New Orleans";
// theSaints.coach = "Sean Payton";
// theSaints.sport = "football";
// console.log(theSaints);
//
// // TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation
//
//
// theSaints["numOfPlayers"] = 62;
// theSaints["numOfChampsWon"] = 1;
// theSaints["isBestTeam"] = "The Saints";
//
// console.log(theSaints);
//
//
// // TODO: write a function that returns the sport and numOfPlayers from your 'team' object
//
// function theSaints(input1, input2) {
//     return theSaints.sport && "numOfPlayers = 62";
// }
// console.log(theSaints(input1, input2));
//
//
// //THIS keyword
//
// var theSpurs = {
//     city: "SA",
//     coach: 'gregg',
//     wins: 5,
//     players: ["one", "two", "tim duncan", "manu", "david robinson"],
//     playerInfo: [
//         {
//             name: "Tim",
//             age: 40,
//             mvp: 3
//         },
//         {
//             name: "manu",
//             age: 38,
//             mvp: 6
//         }
//     ],
//     otherNBATeams: {
//         Jazz: {
//             city: "Salt Lake City",
//             mascot: "Jazz Bear",
//             champsWon: 0
//         },
//         Mavs: {
//             city: "Dallas",
//             mascot: "MavsMan & Champ",
//             champsWon: 1
//         },
//         Pistons: {
//             city: "Detroit",
//             mascot: "Hooper the Horse",
//             champsWon: 3
//         }
//     }
// }
// console.log(theSpurs.otherNBATeams.Mavs);
// // console.log(theSpurs.playerInfo[0].age);
// // console.log(theSpurs);
// // TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
// //  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
// //  'otherNBATeam' team object.
//
//
// /** Mini Exercises */
// /*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
//       isOpen, ranking, yearOpened), as
//       well as, information about at least 5 different animals (think nested objects). For each
//       Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
//        livingPlace). Each animal must also contain a method that returns the sound of that
//         animal using the THIS keyword.
//        hint: Each animal should have at least 5 properties (one of them being animalSound);
// */
//
// * Create a function called 'isTwo' that takes a number as a parameter.
// * The function should return a boolean value based on whether or not the passed
// * number is the number 2.
// *
// * Example
// * > isTwo(1) // returns false
// * > isTwo(2) // returns true
// * > isTwo(3) // returns false
// *
// * Call the function 'isTwo' passing the variable 'random' as a argument.
// *
// * console.log *outside of the function* to check your work (you should see a
// * different result everytime you refresh the page if you are using the random
// * number)
// */
//
//
// function isTwo(number) {
//     if(number === 2) {
//         return true;
//
//     }else {
//         return false;
//     }
// very similar to the last assessment. You’ll be working with Functions, Data Types, Operators and Variables. You’ll need to understand how to evaluate function parameters. If you struggled with certain exercises on the last assessment, I strongly suggest going back over the assessment and working through those exercises. That will help you a lot on the upcoming assessment! Also…  It'll be very helpful to understand how to use arrays and their built-in method to help with sorting numbers and making determinations.