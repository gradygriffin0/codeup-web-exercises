//
// fetch(`https://jsonplaceholder.typicode.com/posts/1`)
//     .then((response) => response.json())
//         .then ((response) => {
//             console.log(response)
//         })
//     .catch((err) => {
//         console.log(err);
//     })
    fetch("https://dog.ceo/api/breeds/image/random",)
        .then(function (response) {
                response.json()
                .then(function(response){
                        console.log(response.message);
                        $('#random-dog-image').attr('src', `${response.message}`);
                })

        }

    )

// console.log($.ajax("#blog"));
// create a second GET request to return the blog post with an id of 11 and display that blog post on the dom.
fetch('https://jsonplaceholder.typicode.com/posts') // make a request - GET
    .then(response => response.json())
    .then(data =>{
        // console.log(data); //
        // console.log(data[10]);
        console.log($.ajax("#blog"))
        document.getElementById("blog").innerHTML = `<h1>${data[10].title}</h1> <p>${data[10].body}</p>`
        // $.ajax("#blog").html(`<h1>${data.title}</h1> <p>${data.body}</p>`)
    }) // we have the data in json format, now we can manipulate it
    // .catch(error => {
    //     console.log(error);
    //     console.error(error);
    // });