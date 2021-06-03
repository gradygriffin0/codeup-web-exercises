"use strict";
//make sure the DOM is loaded first
$(document).ready(function (){
    addListeners();
})

//^     // document.addEventListener("DOMContentLoaded", function() {
        //     addListeners();
        // });

//parent method for adding all listeners -check
function addListeners(){
    //get the elements to add listener and change image - check
            // let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
    let cardContainers = $('.col-md-3').toArray();

    addEvents(cardContainers, 'assets/img/jazz-music-rubber-duck.jpg', 'mouseover');
    addEvents(cardContainers, 'assets/img/question.png', 'mouseout');
}
//add mouseover/mouseout events to all selected elements
function addEvents(cardContainers, imgPath, listenerType){
    cardContainers.forEach((cc) => {
        let card = cc;
        //create listener which will call function change the image
        let listener = function (event) {
            let cardImg = card.querySelector(".card .card-img-top");
            changeImage(cardImg, imgPath);
        };
        cc.addEventListener(listenerType, listener);
    });
}
//actual function to swap images
function changeImage(card, imgPath){
    card.setAttribute('src', imgPath);
}