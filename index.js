var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "./images/" + randomDiceImage;

document.querySelector(".dice .img1").setAttribute("src",randomImageSource);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6)+1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "./images/" + randomDiceImage2;

document.querySelector(".dice .img2").setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2) {
    document.querySelector(".container h1").innerHTML="Player 1 wins";
} else if(randomNumber2>randomNumber1) {
    document.querySelector(".container h1").innerHTML="Player 2 wins";
} else {
    document.querySelector(".container h1").innerHTML="Draw";
}
