"use strict";

let form = document.getElementById("form");
form.addEventListener("submit", e => {
    e.preventDefault();
    let description = form.description.value;
    console.log(description);
});