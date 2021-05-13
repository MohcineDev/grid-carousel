const Slider = document.querySelector(".slider");
const Btns = document.querySelectorAll(".btn");
const slideImgs = document.querySelectorAll(".img");
const navBtns = document.querySelectorAll('.nav-btns div')

let index = 1;
let imgWidth = slideImgs[index].clientWidth;

window.addEventListener('resize', () => {
	imgWidth = slideImgs[index].clientWidth;
})

function slide(i) {
	Slider.style.transition = 'transform .5s ease-in-out';
	Slider.style.transform = 'translateX(' + (-imgWidth * i) + 'px)';
}

function btnClick() {
	if (this.id === 'prev') {
		index--;
	}
	else {
		index++;
	}
	this.disabled = true
	slide(index);
}

Slider.addEventListener('transitionend', () => {

	if (slideImgs[index].id === 'first') {
		Slider.style.transition = 'none';
		index = slideImgs.length - 2;
		Slider.style.transform = 'translateX(' + (-imgWidth * index) + 'px)';
	}
	else if (slideImgs[index].id === 'last') {
		Slider.style.transition = 'none';
		index = 1;
		Slider.style.transform = 'translateX(' + (-imgWidth * index) + 'px)';
	}
	removeBtnClass()
	
	addBtnClass(navBtns[index - 1])

	Btns[0].disabled = false
	Btns[1].disabled = false
})

Btns.forEach(btn => btn.addEventListener('click', btnClick));

navBtns.forEach(item => item.addEventListener('click', () => {
	index = item.dataset.number
	slide(item.dataset.number)
	removeBtnClass()
	addBtnClass(item)
}))

function removeBtnClass() {
	navBtns.forEach(item => {
		item.classList.length > 0 ? item.classList.remove('active') : null
	});
}

function addBtnClass(element) {
	element.classList.add('active')

}