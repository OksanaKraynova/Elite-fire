const menu = document.querySelector('.header__list')
const burger  = document.querySelector('.header__burger')

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
})