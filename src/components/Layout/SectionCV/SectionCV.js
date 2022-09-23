import React from 'react';
import data from '../../../data/data.json';
import Listing from '../../Listing/Listing';
import Skillbar from '../../Skillbar/Skillbar';
import BackgroundImage from '../../UI/BackgroundImage';
import FlexContainer from '../../UI/FlexContainer';
import HeaderSecondary from '../../UI/HeaderSecondary';
import HeaderTertiary from '../../UI/HeaderTertiary';
import IconSvg from '../../UI/IconSvg';
import classes from './SectionCV.module.scss';

const SectionCV = () => {
	const certLinks = [
		<a
			className={classes['inline-link']}
			href="https://www.udemy.com/certificate/UC-8e915ef1-d8e1-4b42-bdcb-bb11c58155ae/"
			title="React - The Complete Guide (incl Hooks, React Router, Redux)"
			target="_blank"
		>
			React Course certificate
		</a>,
		<a
			className={classes['inline-link']}
			href="https://www.udemy.com/certificate/UC-179b9315-d343-48c7-9352-a39d2aede9d4/"
			title="The Complete JavaScript Course 2021: From Zero to Expert!"
			target="_blank"
		>
			JS Course certificate
		</a>,
		<a
			className={classes['inline-link']}
			href={require('../../../img/TOEIC.jpg')}
			title="TOEIC TEST certificate"
			target="_blank"
		>
			TOEIC TEST SCORE
		</a>,
	];

	const educationList = [
		<div className={classes.institution}>
			<IconSvg class={classes.institution__icon} name="icon-graduation-cap" />
			<div className={classes.institution__details}>
				<div className={classes.institution__name}>
					<span className={classes.institution__field}>Economics, </span>
					UKW in Bydgoszcz
				</div>
				<div className={classes.institution__date}>2021 ~ now</div>
			</div>
		</div>,
		<div className={classes.institution}>
			<IconSvg class={classes.institution__icon} name="icon-graduation-cap" />
			<div className={classes.institution__details}>
				<div className={classes.institution__name}>
					<span className={classes.institution__field}>ICT, </span>
					Politechnika Bydgoska
				</div>
				<div className={classes.institution__date}> 2022 - engineer</div>
			</div>
		</div>,
		<div className={classes.institution}>
			<IconSvg class={classes.institution__icon} name="icon-graduation-cap" />
			<div className={classes.institution__details}>
				<div className={classes.institution__name}>
					<span className={classes.institution__field}>ICT, </span>
					Technical School of Electronics in Bydgoszcz
				</div>
				<div className={classes.institution__date}> 2016 - technician</div>
			</div>
		</div>,
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
					<Listing items={educationList} type="single" />
				</section>
				<section
					className={classes['section-experience']}
					id="section-experience"
				>
					<HeaderTertiary>experience</HeaderTertiary>
					<p className={classes.paragraph}>To be continued...</p>
				</section>
			</div>
		</section>
	);
};

export default SectionCV;
