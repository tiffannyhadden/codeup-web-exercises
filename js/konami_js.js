"use strict";



$(function() {

    var keyCodes = [], keyString = "38,38,40,40,37,39,37,39,66,65,13";
    $(document).keyup(function (e) {
        keyCodes.push(e.keyCode);
        if (keyCodes.toString().indexOf(keyString) >= 0) {
            $(document).off('keyup');
            $(document).ready(function(e) {
                var width = "+=" + $(document).width();
                $(".snowcone").animate({
                    right: width
                }, 10000, function() {
                    $(".snowcone").css("display", "none");
                });
            });

            $(document).ready(function(e) {
                var width = "+=" + $(document).width();
                $(".snowcone1").animate({
                    left: width
                }, 8000, function() {
                    $(".snowcone1").css("display", "none");
                });
            });
        }
    })
});