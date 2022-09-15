import React from 'react';
import Icons from '../img/sprite.svg';

const IconSvg = props => (
	<svg className={props.class}>
		<use xlinkHref={`${Icons}#${props.name}`} />
	</svg>
);

export default IconSvg;
