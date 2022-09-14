import React from 'react';
import Icons from '../img/sprite.svg';
import classes from './IconSvg.module.scss';

const IconSvg = props => (
	<svg className={classes.social__icon}>
		<use xlinkHref={`${Icons}#${props.name}`} />
	</svg>
);

export default IconSvg;
