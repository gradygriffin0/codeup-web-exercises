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