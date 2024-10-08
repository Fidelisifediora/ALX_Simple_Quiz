// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer was selected
    if (userAnswer) {
        // Compare user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer was selected
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
