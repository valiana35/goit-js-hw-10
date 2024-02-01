'use strict';

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const clockTimer = document.querySelector('timer');

class Timer {
    constructor(tick) {
        this.intervalId = null;
        this.tick = tick;
    }
    start() {
        const init = Date.now();
        this.intervalId = setInterval(() => {
            const diff = init - Date.now();
            const time = convertMs(diff);
            this.tick(time);
        },1000);
    }

    stop() {
        clearInterval(this.intervalId);
    }
}

const timer = new Timer(onTick);
const date = new Date();
let userSelectedDate;

startBtn.addEventListener('click', () => {
    timer.start();
});

input.addEventListener('click', () => {
    timer.stop();
});

function onTick(time) {
    const str = formatTime(time);
}

function formatTime({days, hours, minutes, seconds}) {
    days = days.toString().padStart(2, 0);
    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);
    return `${days} ${hours} ${minutes} ${seconds}`;
}

     const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            if (userSelectedDate > date) {
                startBtn.disabled = false;
            } else {
                window.alert("Please choose a date in the future");
                startBtn.disabled = true;
            }
          console.log(selectedDates[0]);
        },
      };
flatpickr(input, options);

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000));
  console.log(convertMs(140000));
  console.log(convertMs(24140000));