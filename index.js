var numOfSquares = 6;
var colors = randomColorGenerator(numOfSquares); // [ "rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)", "rgb(0, 255, 0)", "rgb(0, 0, 255)" ]

var squareColor = document.querySelectorAll(".squareBoxes");
var RGB = document.querySelector(".RGB");
var pickedColor = randomColor();

addClass();

document.querySelector(".RGB").textContent = pickedColor;

for (var i = 0; i < squareColor.length; i++) {
    squareColor[i].style.backgroundColor = colors[i];

    squareColor[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor; //if any one presses any of the squareBoxes.

        if (clickedColor === pickedColor) {
            document.querySelector(".message").textContent = "CORRECT!";

            removeClass();

            resetButton.textContent = "Play Again??";

            resetButton.addEventListener("click", function () {
                document.querySelector(".reset").textContent = "NEW COLORS?";

                addClass();
            });
            changeAnsColor();
            document.querySelector(".heading").style.backgroundColor = clickedColor;
            document.querySelector("p").style.backgroundColor = clickedColor;

            var ml4 = {};
            ml4.opacityIn = [0, 1];
            ml4.scaleIn = [0.2, 1];
            ml4.scaleOut = 3;
            ml4.durationIn = 800;
            ml4.durationOut = 600;
            ml4.delay = 500;

            //Animation of text.
            document.querySelector(".message").classList.remove("ml15");
            document.querySelector(".message").classList.add("ml4");

            anime.timeline({
                    loop: true
                })
                .add({
                    targets: '.ml4',
                    opacity: ml4.opacityIn,
                    scale: ml4.scaleIn,
                    duration: ml4.durationIn
                })
                // .add({
                //     targets: '.ml4',
                //     opacity: 0,
                //     scale: ml4.scaleOut,
                //     duration: ml4.durationOut,
                //     easing: "easeInExpo",
                //     delay: ml4.delay
                // })
                .add({
                    targets: '.ml4',
                    opacity: 0,
                    duration: 500,
                    delay: 500
                });

        } else {
            this.style.backgroundColor = "#272727";
            document.querySelector(".message").textContent = "try again..";

            //animation of text.
            document.querySelector(".message").classList.add("ml15");
            document.querySelector(".message").classList.remove("ml4");
            anime.timeline({
                    loop: true
                })
                .add({
                    targets: '.ml15 .word',
                    scale: [14, 1],
                    opacity: [0, 1],
                    easing: "easeOutCirc",
                    duration: 800,
                    delay: (el, i) => 800 * i
                }).add({
                    targets: '.ml15',
                    opacity: 0,
                    duration: 800,
                    easing: "easeOutExpo",
                    delay: 1000
                });
        }
    });
}

function changeAnsColor() {
    for (var i = 0; i < squareColor.length; i++) {
        squareColor[i].style.backgroundColor = pickedColor;
    }
}

function randomColor() {
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

function randomColorGenerator(num) {
    var array = []; //creating an empty array for the colors.
    for (var i = 0; i < num; i++) {
        array.push(randomArrayColor()); ////Calling thte function for ("rgb") and pushing into the array.
    }
    return array; // and then returning the pushed colors of array.
}

function randomArrayColor() {
    var r = Math.floor(Math.random() * 255 + 1);
    var g = Math.floor(Math.random() * 255 + 1);
    var b = Math.floor(Math.random() * 255 + 1);
    // "rgb(0 ,0, 0)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function () {
    colors = randomColorGenerator(numOfSquares); //numOfSquares should be passed instead of passing a number(integer).
    pickedColor = randomColor();
    document.querySelector(".RGB").textContent = pickedColor;
    document.querySelector(".message").textContent = ""; //clear the context to be null.

    removeClass();

    for (var i = 0; i < squareColor.length; i++) {
        squareColor[i].style.backgroundColor = colors[i];
    }
    document.querySelector(".heading").style.backgroundColor = "#272727";
    document.querySelector("p").style.backgroundColor = "#272727";
});

document.querySelector(".easyBtn").addEventListener("click", function () { //Modes of playing (Easy & Hard)

    document.querySelector(".reset").textContent = "NEW COLORS?";
    document.querySelector(".message").textContent = ""; //clear the context to be null.

    addClass();

    document.querySelector(".heading").style.backgroundColor = "#272727";
    document.querySelector("p").style.backgroundColor = "#272727";

    document.querySelector(".easyBtn").classList.add("selectedBtn");
    document.querySelector(".hardBtn").classList.remove("selectedBtn");

    resetButton.addEventListener("click", function () { //as soon as i clicked on easy mode it should reset.
        document.querySelector(".reset").textContent = "NEW COLORS?";

        addClass();
    });

    numOfSquares = 3;
    colors = randomColorGenerator(numOfSquares);
    pickedColor = randomColor();
    document.querySelector(".RGB").textContent = pickedColor;

    for (var i = 0; i < squareColor.length; i++) {
        if (colors[i]) {
            squareColor[i].style.backgroundColor = colors[i];
        } else {
            squareColor[i].style.display = "none"; // block the 2nd row for mode easy.
        }
    }
});

document.querySelector(".hardBtn").addEventListener("click", function () {

    document.querySelector(".message").textContent = "";
    document.querySelector(".reset").textContent = "NEW COLORS?";
    document.querySelector(".heading").style.backgroundColor = "#272727";
    document.querySelector("p").style.backgroundColor = "#272727";

    addClass();

    document.querySelector(".hardBtn").classList.add("selectedBtn");
    document.querySelector(".easyBtn").classList.remove("selectedBtn");
    numOfSquares = 6;
    colors = randomColorGenerator(numOfSquares);
    pickedColor = randomColor();
    document.querySelector(".RGB").textContent = pickedColor;

    for (var i = 0; i < squareColor.length; i++) {
        squareColor[i].style.backgroundColor = colors[i];
        squareColor[i].style.display = "block"; // allow to display the 2nd row for hard mode.
    }
});

function addClass() {
    document.querySelector(".heading h1:last-of-type").classList.add("orange"); //first h1
    document.querySelector(".heading h1:first-of-type").classList.add("green"); //last h1
}

function removeClass() {
    document.querySelector(".heading h1:last-of-type").classList.remove("orange"); //first h1
    document.querySelector(".heading h1:first-of-type").classList.remove("green"); //last h1
}