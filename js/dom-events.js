addButtonEvent();

function addButtonEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", addPost);
}

function addPost() {

    let container = document.getElementById('blog-container');
    container.appendChild(buildBlogPost());

}

function buildBlogPost() {
    let container = document.createElement('div');
    container.setAttribute('class', `col-12 border mb-1`);
    container.appendChild(getDateNode());
    container.appendChild(getBlogText());
    container.appendChild(getNameNode());
    return container;

}

function getBlogText() {
    let userText = document.getElementById('user-input');
    let newPost = document.createElement('p');
    newPost.textContent = userText.value;
    return newPost;
}

function getDateNode() {
    let date = document.createElement('p');
    date.textContent = new Date(Date.now()).toDateString();
    return date;
}

function getNameNode() {
    let userNameInput = document.getElementById('username');
    let userName = document.createElement('p');
    userName.textContent = `Submitted by  ${userNameInput.value}`;
    return userName;
}