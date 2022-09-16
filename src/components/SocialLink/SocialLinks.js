import React from 'react';
import data from '../../data/data.json';
import IconSvg from '../UI/IconSvg';
import classes from './SocialLinks.module.scss';

const SocialLinks = () => {
	return (
		<div className={classes.social}>
			{data.socialLinks.map(socialLink => (
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
