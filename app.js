// menu wrapping
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
burger.addEventListener('click', () => {
    menu.classList.toggle('disp');
});

// header moving
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('movingHeader');

    document.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const offsetX = (window.innerWidth / 2 - mouseX) / 10;
        const offsetY = (window.innerHeight / 2 - mouseY) / 10;

        header.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});
