let timerDisplay = document.getElementById('timer-display');
let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');
let cyclesCompleted = document.getElementById('cycles');

let isRunning = false;
let isWorkPhase = true; 
let timer;
let secondsRemaining = 10 * 60; 
let cycles = 0;

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (secondsRemaining <= 0) {
            clearInterval(timer);
            isRunning = false;
            switchPhase();
        } else {
            secondsRemaining--;
            updateDisplay();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    secondsRemaining = isWorkPhase ? 10 * 60 : 5 * 60;
    updateDisplay();
}

function switchPhase() {
    cycles++;
    cyclesCompleted.innerText = `Циклы: ${cycles}`;
    isWorkPhase = !isWorkPhase;
    secondsRemaining = isWorkPhase ? 10 * 60 : 5 * 60;
    updateDisplay();
    changeInterfaceColor();
}

function updateDisplay() {
    let minutes = Math.floor(secondsRemaining / 60);
    let seconds = secondsRemaining % 60;
    timerDisplay.innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

function changeInterfaceColor() {
    if (isWorkPhase) {
        document.body.classList.remove('timer-rest');
        document.body.classList.add('timer-active');
    } else {
        document.body.classList.remove('timer-active');
        document.body.classList.add('timer-rest');
    }
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
changeInterfaceColor();
