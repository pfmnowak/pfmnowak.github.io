import React from 'react';
import IconSvg from '../UI/IconSvg';
import classes from './SliderButton.module.scss';

const SliderButton = props => {
	return (
		<button
			className={`${classes.slider__btn} ${
				classes[`slider__btn--${props.direction}`]
			}`}
			onClick={props.onClick}
		>
			<IconSvg
				class={classes.slider__arrow}
				name={`icon-arrow-${props.direction}21`}
			/>
		</button>
	);
};

export default SliderButton;
