
alert("Welcome to my Website!");

let favoriteColor = prompt("What is your favorite color?").toUpperCase();


if(favoriteColor === "lime".toUpperCase()) {
    alert(favoriteColor + " is my favorite color too");
} else {
    alert("Your favorite color is: " + favoriteColor);
}









// LESSON EXERCISE
// TODO: Create an html file on the project root called external_js.html
// TODO: Create a JavaScript file inside of js/ called external.js
// TODO: Link external.js to external_js.html by using <script src="external.js"></script>
//  -> Be sure the script tag is inside the body tag of the html
// TODO: Use the alert() function to show a message that says "Welcome to my Website!"
// TODO: Use prompt() to ask for the user's favorite color.
//  -> Assign the result to a variable and use its value to alert a message that shows the user's favorite color
//  -> ie: "blue" -> "Your favorite color is: blue"
// TODO: Use an if statement to see if that color is also your favorite color
//  -> if it is your favorite as well, then show a special message for the user
//  -> otherwise, show the normal message
