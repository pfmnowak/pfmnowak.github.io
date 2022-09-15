import React from 'react';
import classes from './HeaderTertiary.module.scss';

const HeaderTertiary = props => {
	return (
		<header>
			<h2 className={classes['heading-tertiary']}>{props.children}</h2>
		</header>
	);
};

export default HeaderTertiary;
