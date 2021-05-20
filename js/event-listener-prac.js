// TODO: comment out the above code and make your own events!
//  -> Document-specific events: https://developer.mozilla.org/en-US/docs/Web/API/Document#events
//  -> You must:
//      -> add at *least* one event and listener
//      -> when that event is fired, your listener should:
//          -> add at *least* one element to the page with content and styling
//  -> It will be helpful to use the bootstrap classes for your layout and styling in this case
//      -> Keeps you from getting bogged down on styling/layout
//  -> BONUS: Don't feel stifled by the above lesson examples
//      -> You can add more than one event to an element
//      -> You can add an event to many elements at once
//      -> You can add events to things other than element nodes (window, document, element, form, and more!)
//          -> Events across object models: https://developer.mozilla.org/en-US/docs/Web/Events
//

setEvent();

function setEvent() {
    document.getElementById('button')
        .addEventListener('click', eventDestination);
}

function eventDestination(){
     document.body
         .appendChild(buttonEvent());
}

function buttonEvent(){
    let randomE = Math.floor(((Math.random() * 5) + 1));
    if (randomE === 1) {
        let newEl = document.createElement('img');
        newEl.setAttribute('src', 'assets/img/explosion.png');
        newEl.setAttribute('class', 'col-12 col-sm-6 col-md-4');
        return newEl;
    }
    if (randomE === 2) {
        let newEl = document.createElement('img');
        newEl.setAttribute('src', 'assets/img/explosion2.jpeg');
        newEl.setAttribute('class', 'col-12 col-sm-6 col-md-4');
        return newEl;
    }
    if (randomE === 3) {
        let newEl = document.createElement('img');
        newEl.setAttribute('src', 'assets/img/explosion3.png');
        newEl.setAttribute('class', 'col-12 col-sm-6 col-md-4');
        return newEl;
    }
    if (randomE === 4) {
        let newEl = document.createElement('img');
        newEl.setAttribute('src', 'assets/img/explosion4.jpeg');
        newEl.setAttribute('class', 'col-12 col-sm-6 col-md-4');
        return newEl;
    }
}

console.log(randomE);