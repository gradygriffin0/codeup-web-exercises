(function () {
    "use strict";
})();

// TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can
//  be accepted as values
// JSON OBJECT
// {
//     "name":"gaming",
//     "yearsActive": 16,
//     "isSkilled": true,
//     "yearRetired": null,
//     "favoriteGames": ["counter-strike", "league of legends", "half-life"],
//     "favoritePlatform": {
//         name: "steam",
//         bestPlatform: true,
//     }
// }
//AJAX
// JQUERY REQUEST
// $.ajax()

// status property tells you if the request was successful its a number,
// 200 is minimum for successful request
// 300 is redirected successful
// 400 is failed request ( err 404 )
// 500 is server error

//GET request - getting information
// console.log($.ajax("https://jsonplaceholder.typicode.com/comments"));
// $.ajax("https://jsonplaceholder.typicode.com/comments", {
//     //ready to send data POST;
//     type: "POST",
//     // data is anything you are passing to the server;
//     data: {
//         title: "test",
//         article: "test2",
//     }
// })

//URL - location to go look for something


//POST -adding/sending information


//DELETE - specify information in request to be DELETED


//PUT - specify information in request to be EDITED


// Responses

// Failed .fail()
// intentionally broken url to trigger 404;
// $.ajax("https://jsonplaceholder.typie.com/posts", {
//     type: "POST",
//     data: {
//         title: "test",
//         body: "test2"
//     }
// }).fail(function(jqHxr, status, error){
//     console.log(jqHxr); // returns object
//     console.log(status); //returns statusText
//     console.log(error);  // returns specific error
//
// });

// both
    // $.ajax("", {
    //     type: "GET",
    //     success: function(){
    //         alert ("success");
    //     },
    //     error: function(){
    //         alert("error");
    //     }
    // });

//successful

    // $.ajax("https://jsonplaceholder.typicode.com/posts").done(function(data, status){
    //   console.log(status);
    //     console.log(data);
    //     console.log(data[0]);
    //   // alert('posted brah');
    // })

// TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.
// TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully

// console.log($.ajax("https://jsonplaceholder.typicode.com/comments"));
// console.log($.ajax("https://jsonplaceholder.typicode.com/posts", {
//     type: "POST",
//     data: {
//         "userId": 11,
//         "id": 101,
//         "title": "GG",
//         "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
//     }
// }));

// console.log($.ajax("https://jsonplaceholder.typicode.com/posts"));

//click me form
    // $('#clickMe').click(function () {
    //     var userInput = $('#userName').val();
    //     var passInput = $('#password').val();
    //     console.log($.ajax("https://jsonplaceholder.typicode.com/posts", {
    //         type: "POST",
    //         data: {
    //             username: userInput,
    //             password: passInput,
    //         }
    //     }));
    //
    // });


// array data

console.log($.ajax("https://jsonplaceholder.typicode.com/comments", {

}).done(function(data, status){
    for (let i = 0; i < data.length; i++){
        if (data[i].postId === 1){
            console.log(data[i]);
        }
    }
    console.log(status);
}));

