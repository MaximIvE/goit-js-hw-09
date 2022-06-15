import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const NumbersEl = document.querySelectorAll('.value');

let timeEnd = new Date().getTime() + 1000*(25+17*60+15*3600+18*3600*24);
let timeStart = 0;

btnStart.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        timeEnd = selectedDates[0].getTime()
        timeStart = new Date().getTime();
        if (timeEnd > timeStart){
            btnStart.disabled = false;
        }else{
            alert('Please choose a date in the future');
            return;
        }
    },
};
flatpickr('#datetime-picker', options);

btnStart.disabled = true;







btnStart.addEventListener('click', runTimer);

//Функція запускає таймер
function runTimer(){
    btnStart.disabled = true;
    const timerId = setInterval(callBackTime, 1000);
};

//Функція запускає повторення і запускає інші допоміжні функції
function callBackTime(){
    timeStart = new Date().getTime();
    const time = timeEnd - timeStart;
    const timeObj = pad(convertMs(time));
    drawsTinme(timeObj);
};

// Функція перетворює мілісекунди в кількість секунд, хвилин, годин, днів, повертає об'єкт чисел
function convertMs(ms){
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
};

// Функція приводить до формату xx, повертає об'єкт строк
function pad(value){
    const result = {};
    for (key in value){
        result[key] = String(value[key]).padStart(2, '0');
    };
    return result;
};

//Функція відмальовує об'єкт строк у відповідних полях на екрані
function drawsTinme(timeObj){
    let i = 0;
    for (key in timeObj){
        NumbersEl[i].textContent = timeObj[key];
        i +=1;
    };
};
