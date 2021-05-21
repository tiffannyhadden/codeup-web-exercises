function addButtonEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", addPost)
}
function addPost() {

    var textArea = document.getElementById("user-input")
    var newPost = document.createElement("textarea")
    newPost.innerText = textArea.value
    document.getElementById("blog-container").append(newPost);
    addEmail();
}

addButtonEvent()

function addEmail(){

    // create a element

    let emailAdd = document.getElementById("email");

    // create another element and have it set to the new text area

    let postE = document.createElement('textarea');

    // append the email input into the new textarea

    postE.textContent = emailAdd.value;

    document.getElementById("blog-container").append(postE);

}