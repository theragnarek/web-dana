let score = 0;
let timeLeft = 30;
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const square = document.getElementById("square");

function moveSquare() {
    let x = Math.random() * (window.innerWidth - 50);
    let y = Math.random() * (window.innerHeight - 50);
    square.style.left = `${x}px`;
    square.style.top = `${y}px`;
}

square.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveSquare();
});

const gameInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(gameInterval);
        alert(`Игра окончена! Ваши очки: ${score}`);
    }
}, 1000);