// Variables
const menu = document.querySelector('.backof-menu');
const slide = document.querySelector('.slide-menu');
const showcase = document.querySelector('.showcase');
const btnM = document.querySelector('.btn-m');
const btnX = document.querySelector('.btn-x');

// Function
menu.addEventListener('click', function () {
    slide.classList.toggle('hide');
})

menu.addEventListener('click', function () {
    btnM.style.display === 'none' ? btnM.style.display = 'flex' : btnM.style.display = 'none';
    btnX.style.display === 'flex' ? btnX.style.display = 'none' : btnX.style.display = 'flex';
})