import React from 'react';
import classes from './Slide.module.scss';

const Slide = props => {
	return (
		<a href={props.link} title={props.tooltip} target="_blank" rel="noreferrer">
			<figure className={classes.slide} style={props.style}>
				<img
					src={require(`../../img/${props.filename}`)}
					alt={props.tooltip}
					className={classes.slide__img}
				/>
				<figcaption className={classes.slide__caption}>
					{props.caption}
				</figcaption>
			</figure>
		</a>
	);
};

export default Slide;
