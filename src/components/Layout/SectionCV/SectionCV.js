import React from 'react';
import data from '../../../data/data.json';
import InlineLink from '../../InlineLink/InlineLink';
import InstitutionCard from '../../Institution/InstitutionCard';
import Listing from '../../Listing/Listing';
import Skillbar from '../../Skillbar/Skillbar';
import SkillbarLegend from '../../Skillbar/SkillbarLegend';
import BackgroundImage from '../../UI/BackgroundImage';
import FlexContainer from '../../UI/FlexContainer';
import HeaderSecondary from '../../UI/HeaderSecondary';
import HeaderTertiary from '../../UI/HeaderTertiary';
import classes from './SectionCV.module.scss';

const SectionCV = () => {
	const certLinks = [
		<InlineLink
			link="https://www.udemy.com/certificate/UC-6d973aa2-906a-4f15-95b7-1116a4b923c5/"
			title="Vue - The Complete Guide (incl. Router & Composition API)"
		>
			Vue.js Course certificate (Udemy)
		</InlineLink>,
		<InlineLink
			link="https://www.udemy.com/certificate/UC-42773d94-6317-47e8-ad32-ed70fbc3f69d/"
			title="React Testing Library and Jest: The Complete Guide"
		>
			React Testing Library & Jest Course certificate (Udemy)
		</InlineLink>,
		<InlineLink
			link="https://www.udemy.com/certificate/UC-a630d57c-5b67-4e69-8abc-c1e811f5c00b/"
			title="Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
		>
			Advanced CSS Course certificate (Udemy)
		</InlineLink>,
		<InlineLink
			link="https://www.udemy.com/certificate/UC-8e915ef1-d8e1-4b42-bdcb-bb11c58155ae/"
			title="React - The Complete Guide (incl Hooks, React Router, Redux)"
		>
			React Course certificate (Udemy)
		</InlineLink>,
		<InlineLink
			link="https://www.udemy.com/certificate/UC-179b9315-d343-48c7-9352-a39d2aede9d4/"
			title="The Complete JavaScript Course 2021: From Zero to Expert!"
		>
			JS Course certificate (Udemy)
		</InlineLink>,
		<InlineLink
			link={require('../../../img/TOEIC.jpg')}
			title="TOEIC TEST certificate"
		>
			TOEIC English test score (925/990)
		</InlineLink>,
	];

	return (
		<section className={classes['section-cv']} id="section-cv">
			<BackgroundImage
				link={require('../../../img/white-desk.jpg')}
				alt="Section background"
			/>
			<div className={classes['section-cv__content']}>
				<HeaderSecondary>CV</HeaderSecondary>
				<section
					className={classes['section-tech-skills']}
					id="section-tech-skills"
				>
					<HeaderTertiary>tech skills</HeaderTertiary>
					<SkillbarLegend />
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
						<Listing items={data.softSkills} type="double" />
					</FlexContainer>
				</section>
				<section className={classes['section-certs']} id="section-certs">
					<HeaderTertiary>certs</HeaderTertiary>
					<Listing items={certLinks} type="single" />
				</section>
				<section
					className={classes['section-languages']}
					id="section-languages"
				>
					<HeaderTertiary>languages</HeaderTertiary>
					<Listing items={data.languages} type="horizontal" />
				</section>
				<section
					className={classes['section-eduaction']}
					id="section-eduaction"
				>
					<HeaderTertiary>education</HeaderTertiary>
					<Listing
						items={data.educationList.map(item => (
							<InstitutionCard icon="icon-graduation-cap" {...item} />
						))}
						type="single"
					/>
				</section>
				<section
					className={classes['section-experience']}
					id="section-experience"
				>
					<HeaderTertiary>experience</HeaderTertiary>
					<Listing
						items={data.jobsList.map(item => (
							<InstitutionCard icon="icon-briefcase" {...item} />
						))}
						type="single"
					/>
				</section>
			</div>
		</section>
	);
};

export default SectionCV;
