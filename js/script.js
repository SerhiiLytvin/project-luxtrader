'use strict'

const user__icon = document.querySelector('.user-header__icon');
const user__menu = document.querySelector('.user-header__menu');

user__icon.addEventListener('click', function (e) {
   user__menu.classList.toggle('_active');
})