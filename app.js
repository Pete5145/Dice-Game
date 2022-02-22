//Select all the elements of interest;
let title = document.querySelector("h1");
let image1 = document.querySelector(".img1"); 
let image2 = document.querySelector(".img2"); 

//bind body to an event listener
document.addEventListener("DOMContentLoaded", () => {
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;

    image1.setAttribute("src", "images/dice" + num1 + ".png");
    image2.setAttribute("src", "images/dice" + num2 + ".png");

    if(num1 > num2) {
        title.innerHTML = "Player 1 Wins!"
    } 
    else if(num2 > num1) {
        title.innerHTML = "Player 2 Wins!"
    } 
    else {
        title.innerHTML = "Draw!"
    }
});

