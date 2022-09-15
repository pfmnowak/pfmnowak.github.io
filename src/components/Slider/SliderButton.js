import React from 'react';
import Icons from '../../img/sprite.svg';
import classes from './SliderButton.module.scss';

const SliderButton = props => {
	return (
		<button
			className={`${classes.slider__btn} ${
				classes[`slider__btn--${props.direction}`]
			}`}
			onClick={props.onClick}
		>
			<svg className={classes.slider__arrow}>
				<use xlinkHref={`${Icons}#icon-arrow-${props.direction}21`} />
			</svg>
		</button>
	);
};

export default SliderButton;
