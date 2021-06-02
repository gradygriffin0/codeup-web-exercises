"use strict";
// console.log("test");

// $(document).ready(function () {
//     alert(`This webpage has loaded`);
// });

// $("#all-caps").hide();
//
// $(`span`).hide();
//
// $(`.show-me`).show();

//syntax
    // let document = {
    //     getElementById: function() {
    //         console.log(("find element with id of X"));
    //     }
    // }
    // document.getElementById()

//tapping into objects
// let school = {
//     students: 36,
//     name: "MacArthur",
//     teachers: ["casey", "tristan"],
//     getLunchMoney: function(){
//         console.log("You have x dollars");
//     }
// }
// school.getLunchMoney();


// $ dollar sign syntax taps into Jquery library
    // $('selector') // the selector is the element you're selecting from the DOM.
    // $('selector').methods(any arguments to call) // you can call methods on the jquery selector


// select by class name

    // $("h1") // select by element
    // $(".className") // select by class name
    // $("#idName") //select by ID

// children selection
    // $("ul").children();

// hide

    // $("p").hide(); // hides all p tags (display: none)


// show

    // $("p").show(); // shows the hidden div


// add class

    // $(#boom).addClass("border");


// add style

    // $(#boom).css('color', 'blue'); // or multiple
    // $(#boom).css({
    //     'color':'blue',
    //     'font-size': '24px',
    //     'background': 'red',
    // });


// window.onload
// Javascript function - not JQuery
// do something when the window is done loading
// wait for elements to load


//document.ready
// JQuery
// won't wait for images
// do something when the DOM is finished loading
    // $(document).ready(function (){
    //     console.log(new Date());
    // })

for(let i = 0; i<100; i++){
    $('body').append("<img alt='1' style='margin-top: 15px; width: 100px; height: auto;' src='assets/img/explosion.png'>")
}

$('.pink').css('background-color', 'pink');
$('.orange').css('background-color','orange');

window.onload = function(){
    ($('.pink').hide());
}

$(document).ready($('.orange').hide());


// multiple selectors

    // works similarly to css selectors

    // $("p, div") // 1 string with two elements separated by a comma to select unrelated things at the same time

    // $("p div") // all div elements inside p tags.

