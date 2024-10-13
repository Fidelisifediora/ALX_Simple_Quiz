// Function to check the user's answer
function checkAnswer() {
    // Correct answer stored as a string
    const correctAnswer = "4"; // Make sure this matches the correct answer in the quiz

    // Retrieve the selected answer from the radio buttons
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if the user has selected an answer
    if (selectedOption !== null) {
        // Get the value of the selected answer and compare it with the correct answer
        const userAnswer = selectedOption.value;

        // Compare the selected answer with the correct one
        if (userAnswer === correctAnswer) {
            // If correct, display the success feedback
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // If incorrect, display the error feedback
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, prompt the user to select one
        document.getElementById('feedback').textContent = "Please select an answer!";
    }
}

// Add an event listener to the submit button to call checkAnswer on click
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

