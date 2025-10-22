// Step 1: Grab references to the HTML elements we need
const scoreDisplay = document.getElementById("score");
const clickButton = document.getElementById("clickButton");

// Step 2: Create a variable to store the score
let score = 0;

// Step 3: Create a function to add to the score
function addScore() {
  // TODO: Increment the score by 1
  // TODO: Update the scoreDisplay text to show the new score
  // Example: scoreDisplay.textContent = "Score: " + score;
}

// Step 4: Add an event listener to the button so it runs addScore() when clicked
clickButton.addEventListener("click", addScore);
