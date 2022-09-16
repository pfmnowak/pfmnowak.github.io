import React from 'react';
import Listing from '../../Listing/Listing';
import Skillbar from '../../Skillbar/Skillbar';
import FlexContainer from '../../UI/FlexContainer';
import HeaderSecondary from '../../UI/HeaderSecondary';
import HeaderTertiary from '../../UI/HeaderTertiary';
import classes from './SectionCV.module.scss';

const techSkills = [
	{
		name: 'html',
		level: 'expert',
	},
	{
		name: 'css',
		level: 'expert',
	},
	{
		name: 'scss',
		level: 'proficient',
	},
	{
		name: 'js',
		level: 'proficient',
	},
	{
		name: 'React',
		level: 'intermediate',
	},
	{
		name: 'Docker',
		level: 'intermediate',
	},
	{
		name: 'java',
		level: 'proficient',
	},
	{
		name: 'BEM',
		level: 'expert',
	},
	{
		name: 'mySQL',
		level: 'proficient',
	},
	{
		name: 'git',
		level: 'proficient',
	},
	{
		name: 'npm',
		level: 'proficient',
	},
	{
		name: 'Webpack',
		level: 'beginner',
	},
	{
		name: 'DDD',
		level: 'beginner',
	},
	{
		name: 'TDD',
		level: 'beginner',
	},
	{
		name: 'maven',
		level: 'intermediate',
	},
	{
		name: 'kafka',
		level: 'beginner',
	},
];

const softSkills = [
	'Developing web apps',
	'Building reponsive apps & pages',
	'Willingness to learn new skills & technologies',
	'Ability to work in a group',
	'Working under time pressure',
	'Good working knowledge of technology',
	'Open mindset',
	'Experience with business',
	'Working in an international environment',
	'Maintaining clean workspace',
	'Ergonomic and safe work',
	'Good stress management',
	'Ability to self-organize work',
	'Work life balance',
	'Business knowledge and the desire to learn more',
	'Good knowledge of Microsoft Office Suite',
	'Self-development',
	'Problem solving',
	'Written and verbal communication',
	'Detail-oriented',
];

const SectionCV = () => {
	return (
		<section className={classes['section-cv']} id="section-cv">
			<img
				className={classes['section-cv__img']}
				src={require('../../../img/white-desk.jpg')}
				alt="Section background"
			/>
			<div className={classes['section-cv__content']}>
				<header className={classes['header-secondary']}>
					<HeaderSecondary>CV</HeaderSecondary>
				</header>
				<section
					className={classes['section-tech-skills']}
					id="section-tech-skills"
				>
					<HeaderTertiary>tech skills</HeaderTertiary>
					<FlexContainer>
						{techSkills.map(skill => (
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
						<Listing items={softSkills} />
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
