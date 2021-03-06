"use strict"

// function renderCoffee(coffee) {
//     var html = '<div class="coffee">';
//     html += '<p>' + coffee.id + '</p>';
//     html += '<p>' + coffee.name + '</p>';
//     html += '<p>' + coffee.roast + '</p>';
//     html += '</div>';
//
//     return html;
// }

// changed the table into a list item of divs
function renderCoffee(coffee){
    var html = `<li> <div id="${coffee.id}" class="coffee">`;
    html += `${coffee.name} ${coffee.roast}`;
    html += '</div> </li>';

    return html;

}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// added all button to select all roast types
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    console.log(roastSelection.value)
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        // all roast
        if (selectedRoast === "all") {
            console.log("all");
            filteredCoffees.push(coffee);
        }
        // -
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
// working searchbar for our divs
function searchFunction(){
    var searchInput, filter, ul, li, div, textValue, result;
    searchInput = document.getElementById('mySearch');
    filter = searchInput.value.toLowerCase();
    ul = document.getElementById('coffees');
    li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        div = li[i].getElementsByTagName("div")[0];
        console.log(result)

        textValue = div.textContent || div.innerText;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }

    }

}

var tbody = document.getElementById('coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);