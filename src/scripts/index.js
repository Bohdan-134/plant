window.onload = setTimeout(() => {
    counterUp(10, 2000, '.num-1', 10);
    counterUp(6, 1200, '.num-2', 10);
    counterUp(5, 1000, '.num-3', 10);
    createCardProduct();
    getReviews();
}, 2000);



function createSwiper(str) {
    return `
            <div class="swiper reviews-swiper">
                <div class="swiper-wrapper">
                    ${str}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
    `
}

function createHtmlReviewsItem({ imgSrc, userName, userJob, userComment }) {
    return `
        <div class="reviews-slider__header">
            <div class="reviews-slider__user-avatar">
                <img src="${imgSrc}" alt="user-avatar"/>
            </div>
            <div class="reviews-slider__wrapper-user-info">
                <div class="reviews-slider__user-name">${userName}</div>
                <div class="reviews-slider__user-job">${userJob}</div>
            </div>
        </div>
        <div class="reviews-slider__comment">
            <p class="s-text">${userComment}</p>
        </div>
        <div class="reviews-slider__wrapper-img">
            <img src="./img/reviews/Vector.svg" alt="img"/>
            <img src="./img/reviews/Vector.svg" alt="img"/>
        </div>`
}

/* --------------------------Swiper-------------------------- */

function getReviews() {
    fetch("../data/reviews.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(elem => {
                const sliderItem = document.createElement('div');
                sliderItem.classList.add('swiper-slide', 'reviews-slider__item');
                sliderItem.innerHTML = createHtmlReviewsItem(elem);
                document.querySelector('.swiper-wrapper').appendChild(sliderItem);
            });
            var swiper = new Swiper(".swiper", {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        });

}

function innerHtmlProductItem({ imgSrc, title, stars, price, type, bgColor }) {
    return `
            <img src="${imgSrc}" alt="img">
            <h5 class="h5">${title}</h5>
            <ul class="product_wrapp-stars">
                ${createStarsRating(stars)}
            </ul>
            <span class="product__price">${price}</span>
    `
}

function createStarsRating(s) {
    let imgStar = '';
    for (let i = 0; i < s; i++) {
        imgStar += '<li><img src="../img/our-product/star.svg"></li>'
    }
    return imgStar;
}

const containerProduct = document.querySelector('.wrapper-our-product__products');

function createCardProduct() {
    fetch("../data/productCard.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(element => {
                const li = document.createElement('li');
                li.classList.add('card-product__item');
                li.style.backgroundColor = `${element.bgColor}`;
                li.innerHTML = innerHtmlProductItem(element);
                containerProduct.appendChild(li);
            });
        })
}

function counterUp(step, to, cls, interval) {
    let from = 0;

    if (from == to) {
        document.querySelector(cls).textContent = from;
        return;
    }

    let counter = setInterval(function() {
        from += step;
        document.querySelector(cls).textContent = from;

        if (from == to) {
            clearInterval(counter);
        }
    }, interval)
}

const loginBtn = document.getElementById('btn-login');
const registrationBtn = document.getElementById('btn-registration');

registrationBtn.onclick = () => {
    openModal(htmlContentsModal.htmlContentregistrationModal, 'modal-wrapper-registration__open', 'modal-wrapper-registration__close');
}

loginBtn.onclick = () => {
    openModal(htmlContentsModal.htmlContentLoginModal, 'modal-wrapper-login__open', 'modal-wrapper-login__close');
}

function openModal(htmlContent, openClassName, closeClassName) {
    let modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal-wrapper', `${openClassName}`);
    modalWrapper.innerHTML = `
    <div class="modal-window">
        <button id="modal-login__close" onclick="closeModal('${openClassName}', '${closeClassName}')">
            <i class="bx bx-x"></i>
        </button>
        ${htmlContent}
    <div>
    `
    document.body.appendChild(modalWrapper);
}

const htmlContentsModal = {
    htmlContentLoginModal: `
    <div class="modal-title">Login</div>
    <form class="modal-form login-form" action="#">
        <input class="login-username" type="text" placeholder="username..." />
        <input class="login-password" type="text" placeholder="login..." />
        <input type="submit" value="Sign in" id="sign-in" /></form>
    `,
    htmlContentregistrationModal: `
    <div class="modal-title">Sign Up</div>
    <form class="modal-form registration-form" action="#">
        <input class="registration-username" type="text" placeholder="username..." />
        <input class="registration-email" type="text" placeholder="email..." />
        <input class="registration-password" type="text" placeholder="password..." />
        <input class="registration-password__confirm" type="text" placeholder="Confirm password..." />
        <input type="submit" value="Sign up" id="sign-up" /></form>
    `,
    htmlBurgerMenu: `
    <nav class="menu-nav">
        <ul>
            <li> <a href="./page/page404.html">Home</a></li>
            <li> <a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li> <a href="#">Blog</a></li>
            <li> <a href="#">Contact</a></li>
            <li class="menu-login-btn-wrapper">
                <button id="btn-login">login</button>
                <button class="btn" id="btn-registration">Sign Up</button>
            </li>
        </ul>
    </nav>
    `
}


function closeModal(openClassName, closeClassName) {
    const modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.classList.remove(`${openClassName}`);
    modalWrapper.classList.add(`${closeClassName}`);
    setTimeout(() => modalWrapper.remove(), 2000);
}

// collection btn

const seeAllBtn = document.getElementById('see-collection__btn');

seeAllBtn.addEventListener('mouseenter', (e) => console.log(e.path[0].classList.add('see-collection-btn__active')));
seeAllBtn.addEventListener('mouseleave', (e) => console.log(e.path[0].classList.remove('see-collection-btn__active')));

window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 1000) document.querySelector('.about-us__wrapper-img').classList.add('about-us__wrapper-img-active');
})


/* ----------burger-menu---------- */

const openMenuBtn = document.getElementById('burger-menu');

openMenuBtn.addEventListener('click', () => openModal(htmlContentsModal.htmlBurgerMenu, 'modal-wrapper-menu__open', 'modal-wrapper-menu__close'))