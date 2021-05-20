

setSuspectEvent();

function setSuspectEvent() {
    document.getElementById("sus")
        .addEventListener("click", appendSusNode);
}

function appendSusNode() {
    document.getElementById("sus-group")
        .appendChild(getImageNode());
}

function getImageNode() {
    let imageNode = document.createElement("img");
    imageNode.setAttribute("src", "assets/images/sus.gif");
    imageNode.setAttribute("class, col-12 col-sm-6 col-md-4 px-0");
    // imageNode.setAttribute("class", "col-12");

    return imageNode;
}