import React from 'react';
import data from '../../../data/data.json';
import classes from './Navigation.module.scss';

const Navigation = () => {
	return (
		<nav className={classes.navigation}>
			<ul className={classes.navigation__list}>
				{data.navigationLinks.map(link => (
					<li key={link.id} className={classes.navigation__item}>
						<a href={link.id} className={classes.navigation__link}>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
