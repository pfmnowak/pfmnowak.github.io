import React from 'react';
import classes from './BackgroundImage.module.scss';

const BackgroundImage = props => {
	return (
		<img
			className={classes['background-image']}
			src={props.link}
			alt={props.alt}
		/>
	);
};

export default BackgroundImage;
