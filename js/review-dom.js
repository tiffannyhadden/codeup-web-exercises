// TODO: When the user clicks the button with the id of 'submitBtn,' the background color of #override-bootstrap changes to 'red'

$(document).ready(function() {
    $("#submitBtn").click(function () {
    $("#override-bootstrap").css("background-color", "red");
    })
})

// TODO: When the user clicks a .card-text element, change its background color to 'red'

$(document).ready(function() {
    $(".card-text").click(function () {
        $(this).css("background-color", "red");
    })
})

// TODO: Add a new button to the html, directly below the first button. Give it an id of 'resetBtn'.
// -> When the user clicks that button, the page should reload. (HINT: BOM has a super easy method for reloading the page. You'll still need a click event)

// took a screenshot of this one.

// TODO: When the user clicks the element with the id #main-title, its text font size doubles
$(document).ready