import React from 'react';
import classes from './HeaderSecondary.module.scss';

const HeaderSecondary = props => {
	return (
		<header>
			<h2 className={classes['heading-secondary']}>{props.children}</h2>
		</header>
	);
};

export default HeaderSecondary;
