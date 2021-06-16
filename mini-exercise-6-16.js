// create a second GET request to return the blog post with an id of 11 and display that blog post on the dom.
fetch('https://jsonplaceholder.typicode.com/posts') // make a request - GET
    .then(response => response.json())
    .then(data =>{
        console.log(data); //
        console.log(data[10].id);
    }) // we have the data in json format, now we can manipulate it
    .catch(error => {
        console.log(error);
        console.error(error);
    });

// create a second GET request to return the blog post with an id of 11 and display that blog post on the dom.
fetch('https://jsonplaceholder.typicode.com/posts') // make a request - GET
    .then(response => response.json())
    .then(data =>{
        // console.log(data); //
        // console.log(data[10].id); // 11
        return data[10].id; //11
    })
    .then(dataId => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${dataId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.forEach(comment => {
                    console.log(comment);
                    $("#comments").append(`<h4>${comment.name}</h4><hr><p>${comment.body}</p>`);
                });
            });
    })
    .catch(error => {
        alert(err);
        console.error(error);
    });
