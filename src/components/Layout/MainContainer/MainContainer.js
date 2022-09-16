import React from 'react';
import SectionAbout from '../SectionAbout/SectionAbout';
import SectionCV from '../SectionCV/SectionCV';
import SectionProjects from '../SectionProjects/SectionProjects';
import classes from './MainContainer.module.scss';

const MainContainer = () => {
	return (
		<main>
			<div className={classes['main-container']}>
				<SectionAbout />
				<SectionProjects />
				<SectionCV />
			</div>
		</main>
	);
};

export default MainContainer;
