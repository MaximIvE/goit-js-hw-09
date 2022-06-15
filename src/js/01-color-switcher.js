
const bodyEl = document.querySelector("body");
const buttonStart = document.querySelector("button[data-start]");
const buttonStop = document.querySelector("button[data-stop]");
let timerId = null;

buttonStop.disabled = true;

buttonStart.addEventListener('click', runColor);
buttonStop.addEventListener('click', stopColor);

function runColor(){
    buttonStart.disabled = true;
    buttonStop.disabled = false;
	timerId = setInterval(colorChange, 1000);
};

function stopColor(){
    buttonStart.disabled = false;
    buttonStop.disabled = true;
    clearInterval(timerId);
};

//Функція, яка змінює колір фону для <body>
function colorChange(){
    bodyEl.style.backgroundColor = getRandomHexColor();
};

//Функціця, яка генерує випадковий колір
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};