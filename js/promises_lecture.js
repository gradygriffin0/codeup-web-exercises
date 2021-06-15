//
fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((response) => response.json())
        .then ((response) => {
            console.log(response)
        })
    .catch((err) => console.log(err))
