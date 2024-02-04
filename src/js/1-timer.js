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

startBtn.addEventListener('click', onStartBtnClick);

let userSelectedDate;

function onStartBtnClick() {
const intervalId = setInterval(() => {
    const init = Date.now();
    const userInit = userSelectedDate.getTime();
    const diff = userInit - init;
    if (diff > 0) {
        const convertDiff = convertMs(diff);
        days.textContent = addLeadingZero(convertDiff.days);
        hours.textContent = addLeadingZero(convertDiff.hours);
        minutes.textContent = addLeadingZero(convertDiff.minutes);
        seconds.textContent = addLeadingZero(convertDiff.seconds);
        startBtn.disabled = true;
        input.disabled = true;
    } else {
        input.disabled = false;
        clearInterval(intervalId);
    }
}, 1000);
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