"use strict";
(function() {

    $(".un_hide").click(function() {
        $('dd').toggleClass("invisible");
    });

    $("dt").click(function() {
        $(this).toggleClass("highlighted");
    });


    $("button").hover(
        function() {
            $(this).css("background-color", "red");
        },
        function() {
            $(this).css("background-color", "salmon");
        }
    );

    $(".clickHere").click(function() {
        $("ul").each(function() {
            $(this).children().last().toggleClass("highlighted");
        });
    });

    $("h3").dblclick(function() {
        $(this).next().toggleClass('bolded');
    });

    $("li").click(function() {
        $(this).parent().children().first().toggleClass("blued");
    });

    $('#clicked').click(function() {
        $('.newsLetter').hide()
    });

    $('h3').click(function() {
        $(this).next().show();
    });

    setTimeout(function() {
        $('#exampleModalLong').modal('show');
        console.log('hello');
    }, 8000);


})();