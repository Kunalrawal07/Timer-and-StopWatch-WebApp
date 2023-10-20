function ShowTime() {
    let d = new Date();
    let H = d.getHours();
    let M = d.getMinutes();
    let S = d.getSeconds();

    let TimeZoon = "AM";
    if (H > 12) {
        TimeZoon = "PM";
    }
    if (H > 12) {
        H = H - 12;
    }
    H = H < 10 ? "0" + H : H;
    M = M < 10 ? "0" + M : M;
    S = S < 10 ? "0" + S : S;
    let display = H + ":" + M + ":" + S + ":" + TimeZoon;
    document.getElementsByClassName("Date")[0].innerHTML = display;
    setTimeout(ShowTime, 1000);
}
ShowTime();

// Let's Create Stop Watch 
let timer, time = 0, running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const pauseBtn = document.getElementById("pause");

startBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", reset);
pauseBtn.addEventListener("click", reset);

function update() {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

function toggleTimer() {
    if (running) {
        clearInterval(timer);
    } else {
        timer = setInterval(() => { time++; update(); }, 1000);
    }
    running = !running;
    startBtn.textContent = running ? "Pause" : "Resume";
    document.querySelector("#your-time").innerHTML = "Time is Start Now";
}

function reset() {
    running = false;
    clearInterval(timer);
    time = 0;
    update();
    startBtn.textContent = "Play";
    document.querySelector("#your-time").innerHTML = "Stop Watch";

}

