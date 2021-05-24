"use strict";

function renderPage() {
    document.innerHTML = `<div class="container-fluid col-12 bg-light p-4 m-4 w-auto">
            <form class="d-flex">
                <input id="mySearch" onkeyup="searchFunction()" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

            <div class="container-fluid col-12 bg-light p-4 m-4 w-auto">
                <ul id="myUL" class="list-group">
                    <li class="list-group-item"><a href="#">Adele</a></li>
                    <li class="list-group-item"><a href="#">Agnes</a></li>

                    <li class="list-group-item"><a href="#">Billy</a></li>
                    <li class="list-group-item"><a href="#">Bob</a></li>

                    <li class="list-group-item"><a href="#">Calvin</a></li>
                    <li class="list-group-item"><a href="#">Christina</a></li>
                    <li class="list-group-item"><a href="#">Cindy</a></li>
                </ul>
            </div>

        </div>`
}

function searchFunction() {
    var searchInput, filter, ul, li, a, textValue;
    searchInput = document.getElementById("mySearch");
    filter = searchInput.value.toLowerCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];

        textValue = a.textContent || a.innerText;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }

    }
}