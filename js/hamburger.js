// 햄버거 메뉴 토글 기능
const hamburgerBtn = document.querySelector('.hamburger-btn');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});