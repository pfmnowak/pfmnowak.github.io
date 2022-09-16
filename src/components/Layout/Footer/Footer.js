import React from 'react';
import SocialLinks from '../../SocialLink/SocialLinks';
import HeaderSecondary from '../../UI/HeaderSecondary';
import classes from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={classes.footer} id="footer">
			<HeaderSecondary>Contact</HeaderSecondary>
			<SocialLinks />
			<div className={classes.footer__info}>
				<p>If you have any questions, please hesitate to contact me.</p>
				<br />
				<p>&copy; 2022 | By Mikołaj Nowak</p>
			</div>
		</footer>
	);
};

export default Footer;
