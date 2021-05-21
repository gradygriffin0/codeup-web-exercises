addButtonEvent();
function addButtonEvent() {
    document.getElementById("submitBtn")
        .addEventListener("click", addPost)
}
//<div class="container">
//             <div class="row my-5 mx-3 ">
//                 <div class="col-12 px-0">
//                     <form action="">
//                         <div class="form-group my-0">
//                             <textarea id="user-input" class="form-control"></textarea>
//                         </div>
//                         <button id="submitBtn" class="btn btn-dark mt-1" type="button">POST</button>
//                     </form>
//                 </div>
//             </div>
function addPost() {
    let userText = document.getElementById('user-input');
    let newPostContainer = document.createElement('div');
    let newPostChild = document.createElement('div');
    let post = document.createElement('p');
    newPostContainer.setAttribute('class', 'container');
    newPostChild.setAttribute('class', 'col-12 px-0');
    post.innerText = (`${userText.value}`);
    post.append('body');
}

function buildBlogPost(){

}