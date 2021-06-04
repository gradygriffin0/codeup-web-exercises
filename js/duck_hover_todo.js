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
    let cardContainers = $('.col-md-3')

    addEvents(cardContainers, 'assets/img/jazz-music-rubber-duck.jpg', 'mouseover');
    addEvents(cardContainers, 'assets/img/question.png', 'mouseout');
}
//add mouseover/mouseout events to all selected elements
function addEvents(cardContainers, imgPath, listenerType){
    console.log(cardContainers);
    console.log(imgPath);
    console.log(listenerType);
    console.log($('.col-md-3'));
    // cardContainers.forEach((cc) => {
    //     let card = cc;
    //     console.log(card)
    //     create listener which will call function change the image
    //     let listener = function(imgPath)  {
    //         let cardImg = $(".card .card-img-top")
    //         changeImage(cardImg, imgPath);
    //     };
    //     cc.addEventListener(listenerType, listener);
    // });

    $('.col-md-3').hover(function(){
            console.log("testhover");
        let cardImg = $(this);

            console.log(cardImg);
        changeImage(cardImg, 'assets/img/jazz-music-rubber-duck.jpg');
    },
        function (){
            let cardImg = $(this);
            changeImage(cardImg, 'assets/img/question.png');
        });

}
//actual function to swap images
function changeImage(card, imgPath){
    $(card).find('img').attr('src', imgPath);
}