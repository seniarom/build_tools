import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import {switcher} from ".switcher/"
import './howler.js';

const soundTick = new Howl({
    src: ['js/media/tik-tak.mp3'],
    html5: true,
    volume: 0.3,
    loop:true
});
const alarmSound = new Howl({
    src: ['js/media/alarm.mp3'],
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



