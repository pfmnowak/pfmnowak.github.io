import React from 'react';
import classes from './Navigation.module.scss';

const links = [
	{
		id: '#section-about',
		title: 'About',
	},
	{
		id: '#section-projects',
		title: 'Projects',
	},
	{
		id: '#section-cv',
		title: 'CV',
	},
	{
		id: '#footer',
		title: 'Contact',
	},
];

const Navigation = () => {
	return (
		<nav className={classes.navigation}>
			<ul className={classes.navigation__list}>
				{links.map(link => (
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
