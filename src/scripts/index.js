window.onload = setTimeout(() => {
    counterUp(10, 2000, '.num-1', 10);
    counterUp(6, 1200, '.num-2', 10);
    counterUp(5, 1000, '.num-3', 10);
    createCardProduct('New Plants', 3);
    getReviews();
}, 2000);