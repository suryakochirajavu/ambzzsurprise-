// Navigation between pages
function navigateTo(page) {
    window.location.href = page;
}

// Login Handling
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const userId = document.getElementById('user-id').value;
            const password = document.getElementById('password').value;

            // Store user credentials in localStorage
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                const userData = JSON.parse(storedUser);
                if (userData.id === userId && userData.password === password) {
                    // Existing user, trigger animation
                    alert('Welcome back! Special animation for you.');
                    navigateTo('lets-go.html');
                    setTimeout(() => navigateTo('chat.html'), 2000);
                } else {
                    alert('Incorrect ID or password. Try again or create a new one.');
                }
            } else {
                // New user, store credentials
                localStorage.setItem('user', JSON.stringify({ id: userId, password: password }));
                navigateTo('lets-go.html');
                setTimeout(() => navigateTo('chat.html'), 2000);
            }
        });
    }
});

// Answer Checking
let correctAnswers = {
    1: 'This you can provide',
    2: 'FOOD_ANSWER', // Replace with actual answer
    3: 'COLOR_ANSWER', // Replace with actual answer
    4: 'GAME_ANSWER', // Replace with actual answer
    5: 'PLACE_ANSWER' // Replace with actual answer
};

function checkAnswer(questionNumber, correctAnswer) {
    if (questionNumber === 1) {
        navigateTo('question-2.html');
        return;
    }

    const userAnswer = document.getElementById(`answer-${questionNumber}`).value.trim().toLowerCase();
    if (userAnswer === correctAnswer.toLowerCase()) {
        if (questionNumber === 2) navigateTo('question-3.html');
        if (questionNumber === 3) navigateTo('question-4.html');
        if (questionNumber === 4) navigateTo('question-5.html');
        if (questionNumber === 5) navigateTo('collage.html');
    } else {
        alert('Incorrect answer. Try again!');
    }
}