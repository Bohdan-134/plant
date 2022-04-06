const seeAllBtn = document.getElementById('see-collection__btn');

//animationArr
seeAllBtn.addEventListener('mouseenter', (e) => e.path[0].classList.add('see-collection-btn__active'));
seeAllBtn.addEventListener('mouseleave', (e) => e.path[0].classList.remove('see-collection-btn__active'));

window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 1000) document.querySelector('.about-us__wrapper-img').classList.add('about-us__wrapper-img-active');
})