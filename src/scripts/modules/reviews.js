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