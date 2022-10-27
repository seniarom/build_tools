import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import './howler.js';

const soundTick = new Howl({
    src: ['src/media/tik-tak.mp3'],
    html5: true,
    volume: 0.3,
    loop: true
});
const alarmSound = new Howl({
    src: ['src/media/alarm.mp3'],
    html5: true,
    volume: 0.3,
});


const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

function switcher() {
    let x = document.getElementById("timerFirst");
    let y = document.getElementById("datecalc");
    if (x.style.display === "block" & y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";

    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}


