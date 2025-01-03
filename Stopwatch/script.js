let display = document.querySelector('.displayTime');
let startButton = document.querySelector('.startBtn');
let stopButton = document.querySelector('.stopBtn');
let resumeBtn = document.querySelector('.resumeBtn');
let resetBtn = document.querySelector('.resetBtn');

let initialTimer = 0
let timer = initialTimer
let minutes = 0
let hours = 0
let intervalID

stopButton.disabled = true
resetBtn.disabled = true
if(timer == 60){
    minutes++
    timer = timer - 60
}
if(minutes == 60){
    hours++
    minutes = minutes - 60
}
function startTimer() {
    intervalID = setInterval(() => {
        display.innerText = `The Timer Is: 0:${minutes}:${timer}`
        timer++
    }, 1000)
    startButton.disabled = true
    startButton.innerText = "Resume"
    stopButton.disabled = false
    resetBtn.disabled = false
}

function stopTimer() {
    clearInterval(intervalID)
    startButton.disabled = false
    stopButton.disabled = true
}

function resetTimer() {
    startButton.disabled = false
    stopButton.disabled = true
    timer = 0
    resetBtn.disabled = true
    display.innerText = `The Timer Is: ${timer}`
    clearInterval(intervalID)
    startButton.innerText = "Start"
}