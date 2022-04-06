const loginBtn = document.getElementById('btn-login');
const registrationBtn = document.getElementById('btn-registration');
const openMenuBtn = document.getElementById('burger-menu');

//counterAnimation
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

//login&SignIn

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

function closeModal(openClassName, closeClassName) {
    const modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.classList.remove(`${openClassName}`);
    modalWrapper.classList.add(`${closeClassName}`);
    setTimeout(() => modalWrapper.remove(), 2000);
}

//burgerMenu
openMenuBtn.addEventListener('click', () => openModal(htmlContentsModal.htmlBurgerMenu, 'modal-wrapper-menu__open', 'modal-wrapper-menu__close'));


//dataHtmlModals
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