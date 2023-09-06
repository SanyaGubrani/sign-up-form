'use strict';

const inputs = document.querySelectorAll('.input');
const submitButton = document.querySelector('.submit');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirmPassword');





document.addEventListener('click', function (event) {
    inputs.forEach(function (input) {
        input.classList.remove('active');
    });
    if (event.target.classList.contains('input')) {
        event.target.classList.add('active');
    }
});



