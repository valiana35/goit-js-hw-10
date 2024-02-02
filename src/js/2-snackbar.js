'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form');
const btn = document.querySelector('button');

btn.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(value, delay, isValid) {
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isValid === true) {
            iziToast.success({
                title: 'OK',
                message: `✅ Fulfilled promise in ${delay}ms`,
            });
        } else {
            iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight',
            });
        }
    }, delay);
});
}

promise
then(delay => {
   return `✅ Fulfilled promise in ${delay}ms`;
})
.catch(delay => {
    return `❌ Rejected promise in ${delay}ms`;
})