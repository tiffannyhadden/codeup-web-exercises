(function () {
    "use strict";
// TODO: MINI EXERCISE -> IF / ELSE IF / ELSE
//  -> Let's augment our getToDestination() function
//  -> Create a function called canGetRideshare() which will *RETURN* a boolean
//      -> It will determine if there are drivers nearby and the person has enough money for the ride
//  -> Now, when you call getToDestination(), your canGetRideshare parameter will be an argument that is
//  -> fulfilled by a call to canGetRideshare() (yes, I know, the whole parameter name vs argument name thing)
//  -> Be sure to log to the user if they can or cannot get a rideshare
// TODO: BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
//  -> Consider this: What if mileage determined:
//      -> If the rider has enough funds?
//      -> If there is a driver close enough to service the rider?


function getToDestination(age, isInsured, hasCar, canGetRideshare){
    var isLicensed = age >= 16;
    var isLegalDriver = isLicensed && isInsured;
    if (isLegalDriver && hasCar){
        console.log("Let's get in and go!");
    } else if(!isLegalDriver && canGetRideshare){
        console.log("Let's call a rideshare!");
    } else{
        console.log("I think my friend can give us a lift!");
    }
}

function canGetRideShare(drivers, money) {
    if(drivers && money) {
        console.log(" You can get a rideshare");
        return true;
    } else {
        console.log(" You can't get a rideshare");
      return false;
    }

}
console.log(getToDestination(16, false, false, canGetRideShare(1, 20)));

})()