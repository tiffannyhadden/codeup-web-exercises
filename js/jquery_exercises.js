// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });
//
// $("#header").css("color", "darkblue")
// alert($("#header")[0].innerText);
// $(".first").css("font-size", "30px")
// $("#list").css("color", "darkgreen")
// $(".codeup").css("border", "1px solid red")
// $("li").css("font-size", "20px")
// $(".craft").css( {
//     "background-color": "#fff2ac",
//     "background-image": "linear-gradient(to right, #ffe359 0%, #fff2ac 100%)"
// })
// alert($("h1")[0].innerText)
// $(".funk").css("font-variant-numeric", "ordinal")


"use strict";

$(function() {


    $("h1").click(
        function() {
            $(this).css('background-color', 'purple');
        });
    $("p").dblclick(
        function() {
            $(this).css('font-size', '18px');
        });
    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );

});