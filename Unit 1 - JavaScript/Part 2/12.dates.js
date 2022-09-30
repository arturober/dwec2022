let date = new Date(1363754739620); 
console.log(date);

let now = new Date();
console.log(now);

// How many days from 16 March 2020 until now
let nowMs = Date.now(); // equal to now.getTime();
let beforeMs = Date.parse("2020-03-16");
console.log(nowMs, beforeMs);
let diffDays = (nowMs - beforeMs)/1000/60/60/24;
console.log(`${diffDays.toFixed(0)} days from the start of COVID`);

now.setHours(now.getHours() + 24);
console.log(now);

console.log(now.toLocaleDateString());

function showDate(date) {
    let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    console.log(`${days[date.getDay()]}, ${(String(date.getDate()).padStart(2, "0"))} de ${months[date.getMonth()]} de ${date.getFullYear()}`);
}

showDate(now);
