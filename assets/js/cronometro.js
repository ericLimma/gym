"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.getElementById('start').onclick = () => start();
document.getElementById('pause').onclick = () => pause();
document.getElementById('stop').onclick = () => stop();

function start() {
    pause(); // Evita múltiplas instâncias do cronômetro
    cron = setInterval(() => { timer(); }, 10);

    document.getElementById('start').style.display = 'none';
    document.getElementById('pause').style.display = 'inline-block';
    document.getElementById('stop').style.display = 'inline-block';
}

function pause() {
    clearInterval(cron);

    document.getElementById('pause').style.display = 'none';
    document.getElementById('start').style.display = 'inline-block';
}

function stop() {
    clearInterval(cron);
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';

    document.getElementById('start').style.display = 'inline-block';
    document.getElementById('pause').style.display = 'none';
    document.getElementById('stop').style.display = 'none';
}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`;
}
