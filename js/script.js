'use strict'

const user__icon = document.querySelector('.user-header__icon');
const user__menu = document.querySelector('.user-header__menu');

user__icon.addEventListener('click', function (e) {
   user__menu.classList.toggle('_active');
})

// Menu

let iconMenu = document.querySelector(".icon-menu");
if (iconMenu) {
   let delay = 500;
   let body = document.querySelector("body");
   let menuBody = document.querySelector('.menu__body');
   iconMenu.addEventListener('click', (e) => {
      if (!body.classList.contains('_wait')) {
         // body_lock(delay);
         iconMenu.classList.toggle("_active");
         menuBody.classList.toggle("_active");
      }
   })
}