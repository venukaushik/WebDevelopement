var input = document.getElementById("myInput");
var signal = document.getElementById("signal");
var message = document.getElementById("message");

input.addEventListener("keyup", function (event) {
    if (event.getModifierState("CapsLock")) {
        signal.style.background = "red";
        signal.style.boxShadow = "0 0 7px red";
        message.innerText = "Capslock is ON!"
    } else {
        signal.style.background = "lawngreen";
        signal.style.boxShadow = "0 0 7px lawngreen";
        message.innerText = "Capslock is OFF!"
    }
})    
