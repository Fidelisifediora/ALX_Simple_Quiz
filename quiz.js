 // Function to check the user's answer
function checkAnswer() {
    // Correct answer is stored as a string
    const correctAnswer = "4";
    
    // Retrieve the selected answer from the radio buttons
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer was selected
    if (userAnswer) {
        // Compare the value of the selected answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            // Feedback for the correct answer
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // Feedback for an incorrect answer
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // Handle the case where no answer is selected
        document.getElementById('feedback').textContent = "Please select an answer!";
    }
}

// Add an event listener to the submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
