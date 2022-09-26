"use strict";

let list = document.getElementById("list");
// Array.from(list.childNodes).forEach(e => console.log(e));
Array.from(list.children).forEach(e => console.log(e.innerText));

console.log(list.parentElement); //<body>

let li = list.firstElementChild;
while(li) {
    console.log(li.innerText);
    li = li.nextElementSibling;
} 