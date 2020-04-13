const cartButton = document.querySelector('#card-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const body = document.querySelector("body");

cartButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);

function toggleModal () {
    modal.classList.toggle('is-open');
    body.classList.toggle("scroll-off");
}

new WOW().init();