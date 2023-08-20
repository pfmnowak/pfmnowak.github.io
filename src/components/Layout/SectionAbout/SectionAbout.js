import React from 'react';
import BackgroundImage from '../../UI/BackgroundImage';
import HeaderSecondary from '../../UI/HeaderSecondary';
import classes from './SectionAbout.module.scss';

const SectionAbout = () => {
	return (
		<section className={classes['section-about']} id="section-about">
			<BackgroundImage
				link={require('../../../img/plant-background.jpg')}
				alt="Section background"
			/>
			<div className={classes['section-about__content']}>
				<HeaderSecondary>About</HeaderSecondary>
				<div className={classes.profile}>
					<div className={classes['profile-picture']}>
						<figure>
							<img
								src={require(`../../../img/me.PNG`)}
								alt="Profile pic"
								className={classes['profile-picture__img']}
							/>
							<figcaption>Placeholder for a photo of me 🙂</figcaption>
						</figure>
					</div>
					<div className={classes['profile__description']}>
						<p className={`${classes.paragraph} ${classes['colorful-text']}`}>
							Hello there ;) I'm a Junior Frontend Developer, an engineer and an
							economics student based in Bydgoszcz, Poland. Currently working on
							a B2B contract. In my spare time i like reading books, watching
							movies and staring at maps for hours. I'm also a great enthusiast
							of Minimalism, Urbanism, Politics & Star Wars memes.
							<br />
							<br />
							I'm an open-minded person, focused on self-improvement and
							learning new skills & technologies, and passionate about building
							excellent software.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionAbout;
