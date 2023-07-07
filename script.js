var input = document.getElementById("my_input");
var iconElement1 = document.querySelector(".fa-solid.fa-shield.fa-beat");
var iconElement2 = document.querySelector(".fa-solid.fa-shield.fa-bounce");
var iconElement3 = document.querySelector(".fa-solid.fa-shield.fa-shake");
var iconElement4 = document.querySelector(".fa-solid.fa-shield.fa-spin");
var iconElement5 = document.querySelector(".fa-solid.fa-shield.fa-beat-fade");


input.addEventListener("input", updateValue);

function updateValue(e) {
    let num = 0;
    let input1 = e.target.value;

    if (input1.length >= 8) {
        iconElement1.classList.remove("fa-beat");
        num++;
    } else {
        iconElement1.classList.add("fa-beat");
    }

    function containsNumber(str) {
        return /\d/.test(str);
    }

    if (containsNumber(input1)) {
        num++;
        iconElement2.classList.remove("fa-bounce");
    } else {
        iconElement2.classList.add("fa-bounce");
    }

    function hasLowerCase(str) {
        return str.toUpperCase() != str;
    }

    if (hasLowerCase(input1)) {
        num++;
        iconElement3.classList.remove("fa-shake");
    } else {
        iconElement3.classList.add("fa-shake");
    }

    function hasUpperCase(str) {
        return str.toLowerCase() != str;
    }

    if (hasUpperCase(input1)) {
        num++;
        iconElement5.classList.remove("fa-beat-fade");
    } else {
        iconElement5.classList.add("fa-beat-fade");
    }

    function hasSpecialCharacter(str) {
        var regex = /[!@#$%^&*(),.?":{}|<>]/;
        return regex.test(str);
    }

    if (hasSpecialCharacter(input1)) {
        num++;
        iconElement4.classList.remove("fa-spin");
    } else {
        iconElement4.classList.add("fa-spin");
    }

    if (num === 5) {
        playMusic();
    } else {
        stopMusic();
    }
}

function playMusic() {
    audio.play();
}

var audio = new Audio("validation.mp3");
function stopMusic() {
    audio.pause();
}
