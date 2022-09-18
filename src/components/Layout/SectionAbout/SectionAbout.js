import React from 'react';
import BackgroundImage from '../../UI/BackgroundImage';
import HeaderSecondary from '../../UI/HeaderSecondary';
import classes from './SectionAbout.module.scss';

const SectionAbout = () => {
	return (
		<section className={classes['section-about']} id="section-about">
			<BackgroundImage
				link={require('../../../img/plant4.jpg')}
				alt="Section background"
			/>
			<div className={classes['section-about__content']}>
				<HeaderSecondary>About</HeaderSecondary>
				<div className={classes.profile}>
					<div className={classes['profile-picture']}>
						<figure>
							<img
								src={require(`../../../img/me.PNG`)}
								alt="Profile photo"
								className={classes['profile-picture__img']}
							/>
							<figcaption>Placeholder for a photo of me 🙂</figcaption>
						</figure>
					</div>
					<div className={classes['profile__description']}>
						<p className={`${classes.paragraph} ${classes['colorful-text']}`}>
							Hello world. Get ready for more...{' '}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionAbout;
