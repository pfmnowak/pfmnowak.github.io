import React from 'react';
import HeaderSecondary from '../../UI/HeaderSecondary';
import classes from './SectionAbout.module.scss';

const SectionAbout = () => {
	return (
		<section className={classes['section-about']} id="section-about">
			<HeaderSecondary>About</HeaderSecondary>
			<p className={classes.paragraph}>Hello world. Get ready for more...</p>
		</section>
	);
};

export default SectionAbout;
