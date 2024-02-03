import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const delay = form.elements.delay.value;
    const selectedState = form.elements.state.value;
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (selectedState === 'fulfilled') {
            resolve(delay);
        } else if (selectedState === 'rejected') {
            reject(delay);
        }
    }, delay);
});

promise
.then((delay) => {
    iziToast.success({
    title: 'OK',
    message: `✅ Fulfilled promise in ${delay}ms`,
    position: 'topRight',
});
})
.catch((delay) => {
     iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
    });
});
form.reset();
}