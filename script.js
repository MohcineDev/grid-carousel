const Slider = document.querySelector(".slider");
const Btns = document.querySelectorAll(".btn");
const slideImgs = document.querySelectorAll(".img");

let index = 1;
let imgWidth = slideImgs[index].clientWidth;

window.addEventListener('resize', () => {
	imgWidth = slideImgs[index].clientWidth;
})

function slide() {
	Slider.style.transition = 'transform .5s ease-in-out';
	Slider.style.transform = 'translateX(' + (-imgWidth * index) + 'px)';
}

function btnClick() {
	if (this.id === 'prev') {
		index--;
	}
	else {
		index++;
	}
	this.disabled = true
	slide();
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
	Btns[0].disabled = false
	Btns[1].disabled = false
})

Btns.forEach(btn => btn.addEventListener('click', btnClick));
