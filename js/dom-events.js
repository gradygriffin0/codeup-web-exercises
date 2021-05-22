


function addButtonEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", addPost)
}

function addPost() {

    let container = document.getElementById('blog-container');
    container.appendChild(buildBlogPost());

}

function buildBlogPost(){
    let userText = document.getElementById('user-input');
    let newPost = document.createElement('div');
    newPost.textContent = userText.value;
    return newPost;
}