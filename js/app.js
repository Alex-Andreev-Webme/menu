const menuToggle = document.querySelector('.menu__toggle')
const menuArrow = document.querySelector('.menu__arrow')
const subMenu = document.querySelector('.menu__sub')

function toggleMenu() {
	subMenu.classList.toggle('menu__sub_visible')
	menuArrow.classList.toggle('menu__arrow_turned')
}

menuToggle.addEventListener('click', toggleMenu)