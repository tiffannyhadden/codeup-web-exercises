// TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.
// TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully
// TODO: what status do you get back when making a GET request to: https://jsonplaceholder.typicode.com/cmments

$.ajax("https://jsonplaceholder.typicode.com")


$.ajax("https://jsonplaceholder.typicode.com/posts",{
    type: "POST",
    data: {
        "userId": 1,
        "id": "Tiffy",
        "title": "My dog Fraulein",
        "body": "Is a good girl"
    }
});

$.ajax({
    url: "https://jsonplaceholder.typicode.com/",
    type: "GET",
    data: {
        limit:  10,
        offset: 20
    }
});

console.log($.ajax("https://dog.ceo/dog-api/documentation/random"), {
    type:"GET"
});

console.log($.ajax("https://jsonplaceholder.typicode.com/posts", {
    type: "POST",
    data: {
        id: 18,
        title: 'my-title',
        body: 'text text text',
        userId: 18
    }
}));

//.click()
// call function
// click on the button
$("#click-me").click(function () {
    console.log($.ajax("https://jsonplaceholder.typicode.com/posts"), {
        type: "POST",
        data: {
            id: 2,
            body: "hello hello",
            title: "whatsaaaaaap"
        }
    });
})

//responses

//successful
$.ajax("https://jsonplaceholder.typicode.com/posts").done(function () {
    console.log(status);
    alert("your request has been completed successfully");
})



