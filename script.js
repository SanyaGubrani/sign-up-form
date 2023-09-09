'use strict';

const inputs = document.querySelectorAll('.input');


document.addEventListener('click', function (event) {
    inputs.forEach(function (input) {
        input.classList.remove('active');
    });
    if (event.target.classList.contains('input')) {
        event.target.classList.add('active');
    }
});

