import React from 'react';
import classes from './Skillbar.module.scss';

const Skillbar = props => {
	return (
		<div className={classes.skillbar}>
			<div className={classes.skillbar__skill}>{props.name}</div>
			<div className={classes.skillbar__container}>
				<div
					className={`${classes.skillbar__progress} ${
						classes[`skillbar__progress--${props.level}`]
					}`}
				></div>
			</div>
		</div>
	);
};

export default Skillbar;
