const menuToggle = document.querySelector('.menu__toggle')
const menuArrow = document.querySelector('.menu__arrow')
const subMenu = document.querySelector('.menu__sub')
const menuLinks = document.querySelectorAll('.menu__link')
const linksArray = Array.from(menuLinks)
let i = 0

function toggleMenu() {
	if (!subMenu.classList.contains('menu__sub_visible')) {
		subMenu.classList.add('menu__sub_visible')
		menuArrow.classList.add('menu__arrow_turned')
		i = 0
		shuffleInLinks()
	} else {
		menuArrow.classList.remove('menu__arrow_turned')
		i = linksArray.length - 1
		shuffleOutLinks()
	}

}

function shuffleInLinks() {
	const id = setInterval(() => {
		linksArray[i].classList.add('menu__link_shuffled')
		i++
		if (linksArray.length === i) {
			clearInterval(id)
			i = 0
		}
	}, 25)
}

function shuffleOutLinks() {
	const id = setInterval(() => {
		linksArray[i].classList.remove('menu__link_shuffled')
		i--
		if (i === 0) {
			clearInterval(id)
			setTimeout(() => {
				subMenu.classList.remove('menu__sub_visible')
			}, 50)
		}
	}, 25)
}

menuToggle.addEventListener('click', toggleMenu)