document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startBtn');
    const scoreBoard = document.getElementById('scoreBoard');
    const gameArea = document.getElementById('gameArea');
    const circles = document.querySelectorAll('.circle');

    let score = 0;
    let targetColor = '';
    let gameStarted = false;
    let targetCircle;

    // Start or restart the game
    startButton.addEventListener('click', () => {
        if (!gameStarted) {
            score = 0;
            scoreBoard.textContent = `Score : ${score}`;
            gameStarted = true;
            startButton.textContent = 'Restart Game!';
            moveCircles(); // Start moving the circles
        } else {
            score = 0;
            scoreBoard.textContent = `Score : ${score}`;
            startButton.textContent = 'Start Game';
            resetCircles(); // Reset circle positions
        }
    });

    function moveCircles() {
        // Move the circles to random positions
        circles.forEach(circle => {
            const randomTop = Math.floor(Math.random() * (gameArea.offsetHeight - circle.offsetHeight));
            const randomLeft = Math.floor(Math.random() * (gameArea.offsetWidth - circle.offsetWidth));
            circle.style.top = `${randomTop}px`;
            circle.style.left = `${randomLeft}px`;
        });

        // Pick a random target color and target circle
        const randomIndex = Math.floor(Math.random() * circles.length);
        targetColor = circles[randomIndex].style.backgroundColor;
        targetCircle = circles[randomIndex];

        // Add event listener to each circle for click events
        circles.forEach(circle => {
            circle.removeEventListener('click', handleCircleClick); // Remove previous event listener
            circle.addEventListener('click', handleCircleClick);
        });
    }

    function handleCircleClick(event) {
        const clickedCircle = event.target;
        if (clickedCircle.style.backgroundColor === targetColor) {
            score++;
            scoreBoard.textContent = `Score: ${score}`;
            resetCircles(); // Reset circle positions
            setTimeout(() => moveCircles(), 500); // Move circles after a short delay
        }
    }

    function resetCircles() {
        // Reset all circles to their initial positions
        circles.forEach(circle => {
            circle.style.top = '0px';
            circle.style.left = '0px';
        });
    }
});
