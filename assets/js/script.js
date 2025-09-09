// DOM Elements 

// Main sections/boxes
const homeQuizBoxArea = document.getElementById("home-quiz-box-area");
const instructionBoxArea = document.getElementById("instruction-box-area");
const usernameInputArea = document.getElementById("username-input-area");
const categoryOptionsArea = document.getElementById("category-options-area");
const quizCountdownArea = document.getElementById("quiz-countdown-area");
const questionsAnswersArea = document.getElementById("questions-answers-area");
const leaderboardArea = document.getElementById("leaderboard-area");

// Action Buttons
const showInstructionsButton = document.getElementById("show-instructions");
const backToQuizButton = document.getElementById("back-to-quiz");
const startQuizButton = document.getElementById("start-quiz");

// Username Input 
const submitUsernameButton = document.getElementById("submit-username")
const usernameInput = document.getElementById("username-input")

// Timer
const countdownTimer = document.getElementById("countdown-timer");
const timerDisplay = document.getElementById("timer");

// Questions & Scoring System
const scoreDisplay = document.getElementById("scoring");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");


// Leaderboard
const leaderboardList = document.getElementById("leaderboard-list");
const homeButton = document.getElementById("home-button");

//Initial Quiz Variables
let username = "";
let selectedCategory = "";
let score = 0;
let questionCount = 0;
let quizzTimer;
let timeLeft = 100;

//Hide all screens to start except for home screen.
function initializeScreens() {
    homeQuizBoxArea.style.display = 'block';
    instructionBoxArea.style.display = 'none';
    usernameInputArea.style.display = 'none';
    categoryOptionsArea.style.display = 'none';
    quizCountdownArea.style.display = 'none';
    questionsAnswersArea.style.display = 'none';
    leaderboardArea.style.display = 'none';
}

initializeScreens ();

//Shows instructions when button is clicked
showInstructionsButton.addEventListener("click", () => {
    homeQuizBoxArea.style.display =  "none";
    instructionBoxArea.style.display = "block";
});

//Brings user back to Quiz after reading instructions
backToQuizButton.addEventListener("click", () => {
    instructionBoxArea.style.display = "none";
    homeQuizBoxArea.style.display = 'block';
});

//Shows input area for user to enter username
startQuizButton.addEventListener("click", () => {
    homeQuizBoxArea.style.display = "none";
    usernameInputArea.style.display = "block";
});


//Store username 
submitUsernameButton.addEventListener("click", () => {
    const enteredUsername = usernameInput.value.trim();
    if (!enteredUsername) {
        alert("Please enter a username!");
        return;
    }

    username = enteredUsername;
    usernameInput.value = "";

    usernameInputArea.style.display = "none";
   categoryOptionsArea.style.display = "block";

});


