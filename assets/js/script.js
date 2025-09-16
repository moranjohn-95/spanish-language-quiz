// DOM Elements 

// Main sections/boxes
const homeQuizBoxArea = document.getElementById("home-quiz-box-area");
const instructionBoxArea = document.getElementById("instruction-box-area");
const usernameInputArea = document.getElementById("username-input-area");
const categoryOptionsArea = document.getElementById("category-options-area");
const quizCountdownArea = document.getElementById("quiz-countdown-area");
const questionsAnswersArea = document.getElementById("questions-answers-area");
const endQuizArea = document.getElementById("end-quiz-area");
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

// End of Quiz Buttons
const seeLeaderboardButton = document.getElementById("see-leaderboard");
const backtoQuizAgainButton = document.getElementById("back-to-quiz-again");

// Leaderboard
const leaderboardList = document.getElementById("leaderboard-list");
const homeButton = document.getElementById("home-button");

// End of Quiz 
const endOfQuiz = document.getElementById("end-of-quiz");

//Initial Quiz Variables
let username = "";
let selectedCategory = "";
let score = 0;
let questionCount = 0;
let quizTimer;
let timeLeft = 100;
let currentQuestions = [];

// Questions section 

// Vocab section
const questions = {
    vocab: [
        {
            question: "La Ventana",
            answers: [
                { text: "The Door", correct: false },
                { text: "The Table", correct: false },
                { text: "The Window", correct: true },
                { text: "The Ceiling", correct: false },
                
            ]
        },
        {
            question: "El Vecino",
            answers: [
                { text: "The Boss", correct: false },
                { text: "The Neighbour", correct: true },
                { text: "The Teacher", correct: false },
                { text: "The Chef", correct: false },
                
            ]
        },
        {
            question: "La Prima",
            answers: [
                { text: "The Cousin", correct: true },
                { text: "The Uncle", correct: false },
                { text: "The Godfather", correct: false },
                { text: "The Niece", correct: false },
                
            ]
        },
        {
            question: "El peluquero",
            answers: [
                { text: "The Butcher", correct: false },
                { text: "The Hairdresser", correct: true },
                { text: "The Doctor", correct: false },
                { text: "The Vet", correct: false },
                
            ]
        },
         {
            question: "El Clima",
            answers: [
                { text: "The Rain", correct: false },
                { text: "The Thunder", correct: false },
                { text: "The Wind", correct: false },
                { text: "The Weather", correct: true },
                
            ]
        },
        {
            question: "el Plato",
            answers: [
                { text: "The Plate", correct: true },
                { text: "The Patio", correct: false },
                { text: "The Place", correct: false },
                { text: "The Parrot", correct: false },
                
            ]
        },
        {
            question: "La Camarera",
            answers: [
                { text: "The Waitress", correct: true },
                { text: "The Nurse", correct: false },
                { text: "The Receptionist", correct: false },
                { text: "The Waiter", correct: false },
                
            ]
        },
        {
            question: "El Papel",
            answers: [
                { text: "The Phone", correct: false },
                { text: "The Televesion", correct: false },
                { text: "The Chair", correct: false },
                { text: "The Paper", correct: true },
                
            ]
        },
        {
            question: "las Escaleras",
            answers: [
                { text: "The Building", correct: false },
                { text: "The Room", correct: false },
                { text: "The Stairs", correct: true },
                { text: "The Lift", correct: false },
                
            ]
        },
        {
            question: "El Tranvía",
            answers: [
                { text: "The Train", correct: false },
                { text: "The Tripod", correct: false },
                { text: "The Telephone", correct: false },
                { text: "The Tram", correct: true },
                
            ]
        }
        
    ],

    verbs: [
        {
            question: "Empezar", 
            answers: [
                { text: "To Hold", correct: false},
                { text: "To Carry", correct: false},
                { text: "To Start", correct: true},
                { text: "To Want", correct: false},

            ]
        },
        {
            question: "Necesitar", 
            answers: [
                {text: "To Have", correct: false},
                {text: "To Need", correct: true},
                {text: "To Care", correct: false},
                {text: "To Clean", correct: false},

            ]
        },
        {
            question: "Lavar", 
            answers: [
                {text: "To Wash", correct: true},
                {text: "To Carry", correct: false},
                {text: "To Start", correct: false},
                {text: "To Want", correct: false},

            ]
        },
        {
            question: "Tener", 
            answers: [
                {text: "To Clean", correct: false},
                {text: "To Love", correct: false},
                {text: "To Dissapoint", correct: false},
                {text: "To Have", correct: true},

            ]
        },
        {
            question: "Medir", 
            answers: [
                {text: "To Draw", correct: false},
                {text: "To Measure", correct: true},
                {text: "To Finish", correct: false},
                {text: "To Drink", correct: false},

            ]
        },
        {
            question: "Hablar", 
            answers: [
                {text: "To Talk", correct: true},
                {text: "To Cry", correct: false},
                {text: "To Sound", correct: false},
                {text: "To Walk", correct: false},

            ]
        },
        {
            question: "Correr", 
            answers: [
                {text: "To Stretch", correct: false},
                {text: "To Measure", correct: false},
                {text: "To Go Out", correct: false},
                {text: "To Run", correct: true},

            ]
        },
        {
            question: "Omitir", 
            answers: [
                {text: "To Skip", correct: true},
                {text: "To Swim", correct: false},
                {text: "To Own", correct: false},
                {text: "To Claim", correct: false},

            ]
        },
        {
            question: "Espirar", 
            answers: [
                {text: "To Sing", correct: false},
                {text: "To Make", correct: false},
                {text: "To Breath", correct: true},
                {text: "To Rub", correct: false},

            ]
        },
        {
            question: "Escribir", 
            answers: [
                {text: "To Struggle", correct: false},
                {text: "To Write", correct: true},
                {text: "To Give", correct: false},
                {text: "To Return", correct: false},

            ]
        }
    ], 
    
    phrases: [
        {
            question: "¿Qué hora es?",
            answers: [
                {text: "Are you hungry?", correct: false},
                {text: "Can I try it?", correct: false},
                {text: "Where is it?", correct: false},
                {text: "What time is it?", correct: true}
            ]
        },
         {
            question: "¿De dónde eres?",
            answers: [
                {text: "Have you been here before?", correct: false},
                {text: "Where are you from?", correct: true},
                {text: "Where is it?", correct: false},
                {text: "What time is it?", correct: false}
            ]
        },
        {
            question: "Ella esta muy cansada",
            answers: [
                {text: "She is very tired", correct: true},
                {text: "She is very hungry", correct: false},
                {text: "She is very cold", correct: false},
                {text: "She is very loud", correct: false}
            ]
        },
        {
            question: "Ellos son muy groseros",
            answers: [
                {text: "They are very nice", correct: false},
                {text: "They can't have that here", correct: false},
                {text: "They are very funny", correct: false},
                {text: "They are very rude", correct: true}
            ]
        },
        {
            question: "Mi hermana es vegana",
            answers: [
                {text: "My brother is vegan", correct: false},
                {text: "My sister likes vegetables", correct: false},
                {text: "My mother is vegetarian", correct: false},
                {text: "My sister is vegan", correct: true}
            ]
        },
        {
            question: "¿Te gusta aquí?",
            answers: [
                {text: "Do you want to stay here?", correct: false},
                {text: "Do you like it here?", correct: true},
                {text: "Do they like it here?", correct: false},
                {text: "Do you want a water?", correct: false}
            ]
        },
        {
            question: "¿Podemos vernos mañana?",
            answers: [
                {text: "Can we go tomorrow?", correct: false},
                {text: "Can we eat soon?", correct: false},
                {text: "Can we meet tomorrow?", correct: true},
                {text: "Can we talk?", correct: false}
            ]
        },
         {
            question: "¿Puedo pagar por favor?",
            answers: [
                {text: "Can I pay please?", correct: true},
                {text: "Can I see the menu please?", correct: false},
                {text: "Can I have one more please?", correct: false},
                {text: "Can I go please?", correct: false}
            ]
        },
        {
            question: "Hace calor hoy",
            answers: [
                {text: "It's hot today", correct: true},
                {text: "It's on today", correct: false},
                {text: "It's cold today", correct: false},
                {text: "It's raining today", correct: false}
            ]
        },
        {
            question: "Me voy de vacaciones",
            answers: [
                {text: "I'm going home", correct: false},
                {text: "I'm going on vacation", correct: true},
                {text: "I'm feeling sick", correct: false},
                {text: "I'm good at football", correct: false}
            ]
        },

    ]

}

//Hide all screens to start except for home screen.
function initializeScreens() {
    homeQuizBoxArea.style.display = 'block';
    instructionBoxArea.style.display = 'none';
    usernameInputArea.style.display = 'none';
    categoryOptionsArea.style.display = 'none';
    quizCountdownArea.style.display = 'none';
    questionsAnswersArea.style.display = 'none';
    endQuizArea.style.display = 'none';
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

//Category Selection & Loading Countdown
document.querySelectorAll(".category-button").forEach(btn => {
    btn.addEventListener("click", () => {
        selectedCategory = btn.dataset.category;
        startCountdown();
    });
});

function startCountdown() {
    categoryOptionsArea.style.display = "none";
    quizCountdownArea.style.display = "block";

let count = 5;
countdownTimer.textContent = count;
const interval = setInterval(() => {
    count--;
    countdownTimer.textContent = count;
    if (count <= 0) {
        clearInterval(interval);
        startQuiz();
    }
    }, 1000);
}

//Start Qui and 100s Timer
function startQuiz() {
    score =0;
    questionCount = 0;
    timeLeft = 100;

quizCountdownArea.style.display = "none";
questionsAnswersArea.style.display = "block";

if (selectedCategory === "mix") {
    currentQuestions = [
        ...questions.vocab,
        ...questions.verbs,
        ...questions.phrases
    ]
   .sort(() => Math.random() - 0.5)
   .slice(0, 10);
} else {
    currentQuestions = [...questions[selectedCategory]].sort(() => Math.random() - 0.5).slice(0, 10);
}

startTimer();
loadQuestion();

}

function startTimer() {
    timerDisplay.textContent = timeLeft;

    quizTimer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(quizTimer);
            endQuiz();

        }
    }, 1000);
}

// Load Questions
function loadQuestion() {
    if (questionCount < currentQuestions.length) {
        const currentQ = currentQuestions[questionCount];
        showQuestion(currentQ), currentQuestions;
    } else {
        endQuiz();
    }
    
}
 
function showQuestion(currentQ) {
    questionText.textContent = currentQ.question;
    answersContainer.innerHTML = "";

    currentQ.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer.text;
        btn.classList.add("category-button");

        btn.addEventListener("click", () => {
        
        Array.from(answersContainer.children).forEach(b => b.disabled = true);

            if (answer.correct) {
                score++;
            }
            scoreDisplay.textContent = `Correct: ${score}/10`;
            questionCount++;
            
            if (questionCount >= 10) {
                endQuiz();
            } else {
                loadQuestion();
            }
        });

        answersContainer.appendChild(btn);
    });
}

//To end quiz when time runs out or all questions are answered + save results

function endQuiz() {
    clearInterval(quizTimer);
    questionsAnswersArea.style.display = "none";
    endQuizArea.style.display = "block";

    endOfQuiz.innerHTML = `${username}, you scored <span class="score-number">${score}/10</span> 
    with <span class="time-left">${timeLeft}</span> seconds left!`;

    saveScore(username, score, 100 - timeLeft);
}

function saveScore(username, score, timeTaken) {
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    leaderboard.push({ username, score, time: timeTaken});

    leaderboard.sort((a, b) => {
        if (b.score === a.score) {
            return a.time -b.time;
        }
        return b.score - a.score;
    });
    
    leaderboard = leaderboard.slice(0, 10);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

}

// Updates leaderboard for each user

function updateLeaderboard() {
    leaderboardList.innerHTML = "";
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    leaderboard.forEach((entry) => {
        const li = document.createElement("li");
        li.textContent = `${entry.username} - ${entry.score}/10 in ${entry.time} seconds`;
        leaderboardList.appendChild(li);
    });
}

// Event listeners for leaderboard and back to quiz buttons

seeLeaderboardButton.addEventListener("click", () => {
    endQuizArea.style.display = "none";
    leaderboardArea.style.display = "block";
    updateLeaderboard();
});

backtoQuizAgainButton.addEventListener("click", () => {
    endQuizArea.style.display = "none";
    homeQuizBoxArea.style.display = "block";
});

homeButton.addEventListener("click", () => {
    leaderboardArea.style.display = "none";
    homeQuizBoxArea.style.display = "block";
});



