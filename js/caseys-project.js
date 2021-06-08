// //make sure the DOM is loaded first
// document.addEventListener("DOMContentLoaded", function() {
//     addListeners();
// });
// //parent method for adding all listeners
// function addListeners(){
//     //get the elements to add listener and change image
//     let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
//     addEvents(cardContainers, 'img/jazz-music-rubber-duck.jpg', 'mouseover');
//     addEvents(cardContainers, 'img/question.png', 'mouseout');
// }
// //add mouseover/mouseout events to all selected elements
// function addEvents(cardContainers, imgPath, listenerType){
//     cardContainers.forEach((cc) => {
//         let card = cc;
//         //create listener which will call function change the image
//         let listener = function (event) {
//             let cardImg = card.querySelector(".card .card-img-top");
//             changeImage(cardImg, imgPath);
//         };
//         cc.addEventListener(listenerType, listener);
//     });
// }
// //actual function to swap images
// function changeImage(card, imgPath){
//     card.setAttribute('src', imgPath);
// }


// let hoverIn = function() {
//     let attributeValue = $(this).attr("data-attribute");
//     $(this).find(".card-title").text(attributeValue);
//
//     {
//
//
// let hoverOut = function()[
//     $(this).find(".card-title")
//         .text("card")
//     ]
// $(".col-md-3").hover(hoverIn, hoverOut);

// TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
//  -> ALSO, change the background of the li to a new color
//  -> When the li is clicked again, reset the li background color to its original color
//      -> Don't worry about changing the text back

//
// // $("li").click(
// //     function() {
// //         $(this).find(".list-group-item")
// //         $(this).css('background-color', 'purple')
//         .off("click"), function(){
//             $(this).css({"background-color": "black"})
//
//
//         }
//
//         // $("#direct").on("click", function() {
//         //     direct = !direct;
//         //     if (direct) {
//         //         $(this).css("color", "red");
//         //     } else {
//         //         $(this).css("color", "");
//         //     }
//         //     return false;
//         // });
//
//     });

// $(".list-group-item").on("click", function () {
//     $(this).css({
//         "text-transform": "uppercase",
//         "background-color": "purple"
// //             .off("click"), function() {
//             $(this).css({"background-color": "black"})
//         }
//     })
// });

// TODO: Change up the submit button event
//  -> Add a new input with an id of #redirect-url
//  -> Remove the old click events from #submitBtn
//  -> When the user clicks #submitBtn, redirect the page to the value of #redirect-url
//  -> HINT: You can either add a new input or change the id of an existing input element to #redirect-url to save time
//make new click event from scratch

// TODO: After a 2 second delay (BOM), when the user loads the page, change #main-title to a value of your choosing (change text, background color, what have you)!
















// TODO: When the user clicks #submitBtn, log to the console the values of #first, #last, and #handleField
//  -> If any of the fields are empty, alert the user to fill the empty control (be sure to tell them which control was empty)


//     //click function
// console.log($(‘#first’).val())
// $(document).ready(function () {
//     $('#submitBtn').click(function () {
//         // $('#first').val();
//
//         console.log($('#first').val());
//     });
// });
// if($('#first').val() === '' || $('#last').val() === '' || $('#handleField').val() === ''){
//     alert('Please fill the form. Do not leave it empty!');
// }