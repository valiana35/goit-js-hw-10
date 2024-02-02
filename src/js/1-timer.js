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
const clockTimer = document.querySelector('.timer');

startBtn.addEventListener('click', () => {
    timer.start();
});

let userSelectedDate = null;
let diff;

class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.onTick = onTick;
    }
    start() {
        if (diff > 0) {
            days.textContent = addLeadingZero(days);
            hours.textContent = addLeadingZero(hours);
            minutes.textContent = addLeadingZero(minutes);
            seconds.textContent = addLeadingZero(seconds);
        } else {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(() => {
            const init = Date.now();
            const userInit = userSelectedDate.getTime();
            const diff = userInit - init;
            const { days, hours, minutes, seconds } = convertMs(diff);
            this.onTick({ days, hours, minutes, seconds });
        }, 1000);
    }
}

const timer = new Timer({
    onTick: updateClockTimer,
});

function updateClockTimer(time) {
    clockTimer.textContent = `${time.days} ${time.hours} ${time.minutes} ${time.seconds}`;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

     const options = {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
            userSelectedDate = selectedDates[0];
            if (userSelectedDate < new Date) {
                iziToast.error({
                    message: 'Please choose a date in the future',
                    position: 'topRight',
                });
                startBtn.disabled = true;
            } else {
                startBtn.disabled = false;
            }
          console.log(selectedDates[0]);
        },
      };

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

  flatpickr(input, options);
  
  console.log(convertMs(2000));
  console.log(convertMs(140000));
  console.log(convertMs(24140000));