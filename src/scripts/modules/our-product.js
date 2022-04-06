const containerProduct = document.querySelector('.wrapper-our-product__products');

//createCard
function innerHtmlProductItem({ imgSrc, title, stars, price }) {
    return `
            <img src="${imgSrc}" alt="img">
            <h5 class="h5">${title}</h5>
            <ul class="product_wrapp-stars">
                ${createStarsRating(stars)}
            </ul>
            <span class="product__price">${price}</span>
    `
}

function createCardProduct(typeCard, maxIndex) {
    fetch("../data/productCard.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const newArrType = data.filter(element => element.type == typeCard);
            let delayAn = 0;
            let intervalAn = 0.1;
            newArrType.forEach((element, index) => {
                if (index <= maxIndex) {
                    const li = document.createElement('li');
                    li.classList.add('card-product__item');
                    li.setAttribute('style', `animation: slide-in-bottom 0.5s ${delayAn += intervalAn}s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`)
                    li.style.backgroundColor = `${element.bgColor}`;
                    li.innerHTML = innerHtmlProductItem(element);
                    containerProduct.appendChild(li);
                }
            });
        });
}

//createStarR
function createStarsRating(s) {
    let imgStar = '';
    for (let i = 0; i < s; i++) {
        imgStar += '<li><img src="../img/our-product/star.svg"></li>'
    }
    return imgStar;
}

//tabsCard
const tabsCardBtns = document.querySelectorAll('.product-tab');

function tabCard() {
    tabsCardBtns.forEach(element => {
        element.addEventListener('click', selectTab);
    })
}

function selectTab() {
    tabsCardBtns.forEach(element => {
        element.classList.remove('product-tab__active');
    });
    this.classList.add('product-tab__active');
    containerProduct.innerHTML = '';
    createCardProduct(this.getAttribute('data-tab-name'), 3);
}

tabCard();