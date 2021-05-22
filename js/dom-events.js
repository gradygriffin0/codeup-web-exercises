function addButtonEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", addPost)
}

function addPost() {
    let userText = document.getElementById('user-input');
    let newPost = document.createElement(buildBlogPost);

}

function buildBlogPost(){
    let newPost = document.createElement()
}