import React from 'react';
import classes from './Logo.module.scss';

const Logo = props => {
	return (
		<div
			className={`${classes.logo} ${props.symbol && classes['logo--small']}`}
		>
			<img
				src={require(`../../../img/${
					props.symbol ? 'symbol' : 'logo'
				}-color.png`)}
				alt="Logo"
				className={classes['logo__img']}
			/>
		</div>
	);
};

export default Logo;
