let mobileMenuButton = document.querySelector('.mobile--button__wrap');
let mobileOpenMenu = document.querySelector('.mobile__list');


function openMenu() {
	mobileOpenMenu.classList.toggle('active__list');
}



mobileMenuButton.addEventListener('click',openMenu)