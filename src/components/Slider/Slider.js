import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import Slide from './Slide';
import classes from './Slider.module.scss';
import SliderButton from './SliderButton';

const Slider = () => {
	const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

	const maxSlide = data.slides.length - 1;

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

	const keyDownHandler = e => {
		e.key === 'ArrowLeft' && !e.repeat && prevSlideHandler();
		e.key === 'ArrowRight' && !e.repeat && nextSlideHandler();
	};

	useEffect(() => {
		// Add Event handler (for a keyboard)
		window.addEventListener('keydown', keyDownHandler);

		// Remove event listener on cleanup
		return () => {
			window.removeEventListener('keydown', keyDownHandler);
		};
	}, []);

	const clickDotHandler = index => {
		setCurrentSlideNumber(index);
	};

	const slidesToRender = data.slides.map((slide, index) => (
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
			{data.slides.map((slide, index) => (
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
			<SliderButton onClick={prevSlideHandler} direction="left" />
			<div className={classes.slider__box}>
				{slidesToRender}
				{dotsToRender}
			</div>
			<SliderButton onClick={nextSlideHandler} direction="right" />
		</div>
	);
};

export default Slider;
