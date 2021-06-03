'use strict'


var button = document.getElementById('myButton');
var container = document.getElementById("post-container");

button.addEventListener('click', clickButton)

function clickButton(){
    let newContainer = createElement();

    styleElement(newContainer);

    container.appendChild(newContainer);
}

function createElement(){

    let userInput = document.getElementById('mySearch').value;

    let newContainer = document.createElement('div');
    newContainer.setAttribute('class', 'card col-4 d-flex justify-content-center text-center border');
    newContainer.innerText = userInput;
    return newContainer;
}

function styleElement(element){
    $(element).css({
        'font-size':'15px',
        'font-weight':'bold',
        'color':'red',
    })
}