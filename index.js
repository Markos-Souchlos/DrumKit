var numOfDrums = document.querySelectorAll(".drum").length;

for (var i=0; i<numOfDrums; i++) {


    document.querySelectorAll(".drum")[i].addEventListener("click",function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

    });
}

document.addEventListener("keydown",function (event) {
    
    makeSound(event.key);
    
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            animate(key);
            break;
        case "a":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            animate(key);
            break;
        case "s":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            animate(key);
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            animate(key);
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            animate(key);
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            animate(key);
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            animate(key);
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}


function animate(key) {
    document.getElementsByClassName(key)[0].classList.add("pressed");
    setTimeout(() => {
        document.getElementsByClassName(key)[0].classList.remove("pressed")
    },100,key)
}

