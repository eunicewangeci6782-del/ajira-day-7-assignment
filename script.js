
// Step 1: Get the button from our HTML page
const greetButton = document.getElementById("greetButton");

// Step 2: Get the paragraph where our message will appear
const greetingMessage = document.getElementById("greetingMessage");

// Step 3: Create a function to display a greeting
function showGreeting() {

    greetingMessage.textContent =
        "Hello! Welcome to Eunice Wangeci's portfolio. Thank you for visiting!";

}

// Step 4: Listen for a button click
greetButton.addEventListener("click", showGreeting);

// Step 1: Get the button from our HTML page
const greetButton = document.getElementById("greetButton");

// Step 2: Get the paragraph where our message will appear
const greetingMessage = document.getElementById("greetingMessage");

// Step 3: Create a function to display a greeting
function showGreeting() {

    greetingMessage.textContent =
        "Hello! Welcome to Eunice Wangeci's portfolio. Thank you for visiting!";

}

// Step 4: Listen for a button click
greetButton.addEventListener("click", showGreeting);

// JavaScript operators

let firstNumber = 20;
let secondNumber = 10;

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);

// JavaScript conditions

let learningProgress = 7;

if (learningProgress >= 7) {
    console.log("Congratulations! You have completed Week 1.");
} else {
    console.log("Keep learning. You are making progress!");
}

// My web development skills

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git and GitHub"
];

// Display my skills
console.log(skills);

// Display individual skills
console.log(skills[0]);
console.log(skills[1]);
console.log(skills[2]);
console.log(skills[3]);

// Function to calculate study hours

function calculateStudyHours(hoursPerDay, days) {

    return hoursPerDay * days;

}

// Call the function
const totalStudyHours = calculateStudyHours(2, 30);

// Display the result
console.log("My total study hours are: " + totalStudyHours);

