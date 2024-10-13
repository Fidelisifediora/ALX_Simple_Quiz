  function checkAnswer() {
    // Correct answer
    let correctAnswer = "4";
    
    // Get the user's selected answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer is selected
    if (userAnswer) {
    userAnswer = userAnswer.value;
    
    // Feedback message
    let feedback = document.getElementById('feedback');
    feedback=[];
    // Compare answers and provide feedback
    if (userAnswer == correctAnswer) {
    feedback.push( "Correct! Well done.");
    } else {
    feedback.textContent = "That's incorrect. Try again!";
    }
    } else {
    // If no answer is selected
    document.getElementById('feedback').textContent = "Please select an answer!";
    }
    }
    
    document.getElementById('submit-answer').addEventListener('click', checkAnswer);
    
