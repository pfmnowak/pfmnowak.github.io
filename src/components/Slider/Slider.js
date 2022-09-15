import React, { useEffect, useState } from 'react';
import Slide from './Slide';
import classes from './Slider.module.scss';

const slides = [
	{
		link: 'https://pfmnowak.github.io/sudoku-js/',
		filename: 'sudoku.PNG',
		tooltip: 'Sudoku game',
		caption: 'Sudoku JS',
	},
	{
		link: 'https://pfmnowak.github.io/food-order-react/',
		filename: 'food-order-react.PNG',
		tooltip: 'Food order React App',
		caption: 'Food order React',
	},
	{
		link: 'https://pfmnowak.github.io/natours-flexbox/',
		filename: 'natours.PNG',
		tooltip: 'Natours project',
		caption: 'Natours project',
	},
	{
		link: 'https://pfmnowak.github.io/expenses-react/',
		filename: 'expenses-react.PNG',
		tooltip: 'Expenses React App',
		caption: 'Expenses React',
	},
	{
		link: 'https://pfmnowak.github.io/github-repos-app/src/',
		filename: 'github-repos.PNG',
		tooltip: 'GitHub Repos App',
		caption: 'GitHub Repos',
	},
	{
		link: 'https://pfmnowak.github.io/trillo-sass-course/',
		filename: 'trillo.PNG',
		tooltip: 'Trillo project',
		caption: 'Trillo project',
	},
];

const Slider = () => {
	const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

	const maxSlide = slides.length - 1;

	const nextSlideHandler = () => {
		setCurrentSlideNumber(prevState =>
			prevState === maxSlide ? 0 : prevState + 1
		);
	};

	const prevSlideHandler = () => {
		setCurrentSlideNumber(prevState =>
			prevState === 0 ? maxSlide : prevState - 1
		);
	};

	useEffect(() => {
		// Event handler (for a keyboard)
		document.addEventListener('keydown', function (e) {
			e.key === 'ArrowLeft' && prevSlideHandler();
			e.key === 'ArrowRight' && nextSlideHandler();
		});
	}, []);

	const clickDotHandler = index => {
		setCurrentSlideNumber(index);
	};

	const slidesToRender = slides.map((slide, index) => (
		<Slide
			key={slide.filename}
			link={slide.link}
			filename={slide.filename}
			tooltip={slide.tooltip}
			caption={slide.caption}
			style={{
				transform: `translateX(${100 * (index - currentSlideNumber)}%)`,
			}}
		/>
	));

	const dotsToRender = (
		<div className={classes.dots}>
			{slides.map((slide, index) => (
				<button
					key={slide.filename}
					className={`${classes.dots__dot} ${
						index === currentSlideNumber && classes['dots__dot--active']
					}`}
					onClick={() => clickDotHandler(index)}
				></button>
			))}
		</div>
	);

	return (
		<div className={classes.slider}>
			<button
				className={`${classes.slider__btn} ${classes['slider__btn--left']}`}
				onClick={prevSlideHandler}
			>
				&larr;
			</button>
			<div className={classes.slider__box}>
				{slidesToRender}
				{dotsToRender}
			</div>
			<button
				className={`${classes.slider__btn} ${classes['slider__btn--right']}`}
				onClick={nextSlideHandler}
			>
				&rarr;
			</button>
		</div>
	);
};

export default Slider;
