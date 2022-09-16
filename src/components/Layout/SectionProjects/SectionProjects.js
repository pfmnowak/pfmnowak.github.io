import React from 'react';
import Slider from '../../Slider/Slider';
import HeaderSecondary from '../../UI/HeaderSecondary';
import classes from './SectionProjects.module.scss';

const SectionProjects = () => {
	return (
		<section className={classes['section-projects']} id="section-projects">
			<HeaderSecondary>Projects</HeaderSecondary>
			<Slider />
		</section>
	);
};

export default SectionProjects;
