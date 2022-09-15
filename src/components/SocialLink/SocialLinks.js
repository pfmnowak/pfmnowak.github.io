import React from 'react';
import IconSvg from '../IconSvg';
import classes from './SocialLinks.module.scss';

const links = [
	{
		link: 'https://www.facebook.com/profile.php?id=100002371834866',
		title: 'Facebook profile',
		icon: 'icon-facebook',
		active: true,
	},
	{
		link: 'https://www.linkedin.com/in/mikołaj-nowak-621481230',
		title: 'LinkedIn profile',
		icon: 'icon-linkedin2',
		active: true,
	},
	{
		link: 'https://github.com/pfmnowak',
		title: 'GitHub Repo',
		icon: 'icon-github',
		active: true,
	},
	{
		link: 'https://www.instagram.com/',
		title: 'TBA',
		icon: 'icon-instagram',
		active: false,
	},
	{
		link: 'https://pl.pinterest.com/pfmnowak/',
		title: 'Pinterest profile',
		icon: 'icon-pinterest2',
		active: true,
	},
	{
		link: 'mailto:pfmnowak@gmail.com',
		title: 'Mail me',
		icon: 'icon-mail4',
		active: true,
	},
];

const SocialLinks = () => {
	return (
		<div className={classes.social}>
			{links.map(socialLink => (
				<a
					key={socialLink.link}
					href={socialLink.link}
					className={`${classes.social__link} ${
						!socialLink.active && classes['social__link--inactive']
					}`}
					title={socialLink.title}
				>
					<IconSvg class={classes.social__icon} name={socialLink.icon} />
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
