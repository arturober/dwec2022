"use strict";

// for(var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// console.log(i); // 11 (global variable!!)

// Try also with var i!!
for(let i = 1; i <= 10; i++) {
    let p = document.createElement("p");
    p.innerText = "Paragraph " + i;
    document.body.append(p);
    
    p.addEventListener('click', e => console.log("Click " + i));
}