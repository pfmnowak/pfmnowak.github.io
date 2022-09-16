import React from 'react';
import data from '../../../data/data.json';
import Listing from '../../Listing/Listing';
import Skillbar from '../../Skillbar/Skillbar';
import FlexContainer from '../../UI/FlexContainer';
import HeaderSecondary from '../../UI/HeaderSecondary';
import HeaderTertiary from '../../UI/HeaderTertiary';
import classes from './SectionCV.module.scss';

const SectionCV = () => {
	return (
		<section className={classes['section-cv']} id="section-cv">
			<img
				className={classes['section-cv__img']}
				src={require('../../../img/white-desk.jpg')}
				alt="Section background"
			/>
			<div className={classes['section-cv__content']}>
				<HeaderSecondary>CV</HeaderSecondary>
				<section
					className={classes['section-tech-skills']}
					id="section-tech-skills"
				>
					<HeaderTertiary>tech skills</HeaderTertiary>
					<FlexContainer>
						{data.techSkills.map(skill => (
							<Skillbar
								key={skill.name}
								name={skill.name}
								level={skill.level}
							/>
						))}
					</FlexContainer>
				</section>
				<section
					className={classes['section-soft-skills']}
					id="section-soft-skills"
				>
					<HeaderTertiary>soft skills</HeaderTertiary>
					<FlexContainer>
						<Listing items={data.softSkills} />
					</FlexContainer>
				</section>
				<section className={classes['section-certs']} id="section-certs">
					<HeaderTertiary>certs</HeaderTertiary>
				</section>
				<section
					className={classes['section-languages']}
					id="section-languages"
				>
					<HeaderTertiary>languages</HeaderTertiary>
				</section>
				<section
					className={classes['section-eduaction']}
					id="section-eduaction"
				>
					<HeaderTertiary>education</HeaderTertiary>
				</section>
				<section
					className={classes['section-experience']}
					id="section-experience"
				>
					<HeaderTertiary>experience</HeaderTertiary>
				</section>
			</div>
		</section>
	);
};

export default SectionCV;
