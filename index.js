// on click, add add a random card between 2 & 11
// 

let totalVal = 0;
let curCard = 0;
let gameStart = false;
let cards = "";

let sumEl = document.getElementById("sum");
let gameStatusEl = document.getElementById("status");
let cardsEl = document.getElementById("cards");

gameStatusEl.textContent = "Click Start button to start game!";

// Game Start function. To tell if the game has started or not.
function startGame() {
    if (gameStart === true) {
        gameStatusEl.textContent = "Game is already started!! Try to get 21! Click hit me to get another card. If you go over 21, you lose."
    } else {
        gameStart = true;
        curCard = 0;
        totalVal = 0;
        cards = "";
        sumEl.textContent = "Sum: "
        cardsEl.textContent = "Cards: ";
        gameStatusEl.textContent = "Try to get 21! Click hit me to get another card. If you go over 21, you lose."

    }
}
// Function to get a random number between 2 values
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Game Engine function to define the current card with a value between 2 and 11 to denote possible card values.
function hitMe() {
    curCard = randomIntFromInterval(2, 11);
    totalVal += curCard;
    cards += String(curCard) + " - ";
    cardsEl.textContent = "Cards: " + cards;
    sumEl.textContent = "Sum: " + totalVal
    if (totalVal > 21) {
        lost();

    } else if (totalVal === 21) {
        won();
    }
}

function won() {
    gameStatusEl.textContent = "You won the game! Congratulations!";
    gameStart = false;
}

function lost() {
    gameStatusEl.textContent = "You lost the game! Better luck next time.";
    gameStart = false;
}

// When you click hit me, a random card will be generated and the status 
// of the game will change depending on the outcome.
// If over 21, you lose. If you get 21 you win.

function hitMeButton() {
    if (gameStart === false) {
        gameStatusEl.textContent = "You're not playing! Click Start button to start.";
    }
    else {
        if (totalVal > 21) {
            lost();
    
        } else if (totalVal === 21) {
            won();
        
        } else {
            hitMe();            
        }
    }
}
