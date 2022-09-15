import React from 'react';
import classes from './Footer.module.scss';
import SocialLinks from './SocialLink/SocialLinks';

const Footer = () => {
	return (
		<footer className={classes.footer} id="footer">
			<h2 className={classes['heading-secondary']}>Contact</h2>
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
