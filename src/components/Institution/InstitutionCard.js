import React from 'react';
import IconSvg from '../UI/IconSvg';
import classes from './InstitutionCard.module.scss';

const InstitutionCard = props => {
	return (
		<div className={classes.institution}>
			<IconSvg class={classes.institution__icon} name={props.icon} />
			<div className={classes.institution__details}>
				<div className={classes.institution__name}>
					<span className={classes['u-text-bold']}>{props.boldName}</span>
					{props.name}
				</div>
				<div className={classes.institution__date}>{props.date}</div>
			</div>
		</div>
	);
};

export default InstitutionCard;
