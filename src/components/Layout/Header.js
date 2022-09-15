import React from 'react';
import classes from './Header.module.scss';
import Navigation from './Navigation';

const Header = () => {
	return (
		<header className={classes.header}>
			<Navigation />
			<div className={classes.header__box}>
				<h1
					className={`${classes['heading-primary']} ${classes['heading-primary--main']}`}
				>
					<span className={classes['colorful-text']}>Hi, I'm</span> Mikołaj
				</h1>
				<h1
					className={`${classes['heading-primary']} ${classes['heading-primary--sub']}`}
				>
					junior frontend developer
				</h1>
			</div>
			<div className={classes.header__neon}></div>
		</header>
	);
};

export default Header;
