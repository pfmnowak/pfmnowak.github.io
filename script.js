'use strict';

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider__box');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

const scrollTopBtn = document.querySelector('.scroll-top-btn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	) {
		scrollTopBtn.style.display = 'block';
	} else {
		scrollTopBtn.style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
// 	document.body.scrollTop = 0; // For Safari
// 	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

////////////////////////////////////////
// Slider
const sliderFn = function () {
	let curSlide = 0;
	const maxSlide = slides.length;

	// slider.style.transform = 'scale(0.7) translateX(-800px)';
	// slider.style.overflow = 'visible';

	const createDots = function () {
		slides.forEach(function (_, i) {
			dotContainer.insertAdjacentHTML(
				'beforeend',
				`<button class="dots__dot" data-slide="${i}"></button>`
			);
		});
	};

	const activateDots = function (slide) {
		document
			.querySelectorAll('.dots__dot')
			.forEach(dot => dot.classList.remove('dots__dot--active'));

		document
			.querySelector(`.dots__dot[data-slide="${slide}"]`)
			.classList.add('dots__dot--active');
	};

	const goToSlide = function (slide) {
		slides.forEach(
			(s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
			// 0%, 100%, 200%, 300%
		);
	};

	const nextSlide = function () {
		if (curSlide === maxSlide - 1) {
			curSlide = 0;
		} else {
			curSlide++;
		}
		goToSlide(curSlide);
		activateDots(curSlide);
	};

	const prevSlide = function () {
		if (curSlide === 0) {
			curSlide = maxSlide - 1;
		} else {
			curSlide--;
		}
		goToSlide(curSlide);
		activateDots(curSlide);
	};

	const init = function () {
		createDots();
		goToSlide(0);
		activateDots(0);
	};
	init();

	// Event handlers
	// Next slide
	btnRight.addEventListener('click', nextSlide);
	// Previous slide
	btnLeft.addEventListener('click', prevSlide);

	document.addEventListener('keydown', function (e) {
		if (e.key === 'ArrowLeft') {
			prevSlide();
		}
		e.key === 'ArrowRight' && nextSlide();
	});

	dotContainer.addEventListener('click', function (e) {
		if (e.target.classList.contains('dots__dot')) {
			// const slide = e.target.getAttribute('data-slide');
			// const slide = e.target.dataset.slide;
			const { slide } = e.target.dataset;
			goToSlide(slide);
			activateDots(slide);
		}
	});
};

sliderFn();
