let bulbOn = document.getElementById("onButton");
let bulbOff = document.getElementById("offButton");

bulbOn.onclick = function(){
    document.getElementById("bulb").src ="on.jpg";
}

bulbOff.onclick = function(){
    document.getElementById("bulb").src ="off.jpg";
}