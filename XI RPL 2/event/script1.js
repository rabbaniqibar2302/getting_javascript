const keydown = document.getElementById("bawah");
const pressed = document.getElementById("pencet");
const keyup = document.getElementById("atas");

document.addEventListener("keydown", function(event){
    keydown.innerText = `Tertekan bawah : ${event.key}`;
})

document.addEventListener("keypress", function(event){
    pressed.innerText = `Saat Menahan : ${event.key}`;
})

document.addEventListener("keyup", function(event){
    keyup.innerText = `Tertekan dilepas : ${event.key}`;
})