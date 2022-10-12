import React, { useRef } from 'react';
import classes from './Skillbar.module.scss';

const SkillbarLegend = props => {
	const labelRef = useRef();
	const classRef = useRef(null);
	const labelDefault = 'Skill Lvl ';

	const hoverHandler = (event, label) => {
		// classRef.current.style['width'] = `${label}`;
		setWidth(label);
		setLabel(label);

		// setName('beginner');
		// nameRef.current.innerText = 'beginner';
		// event.target.style.background = 'red';
	};

	const hoverOutAllHandler = event => {
		// classRef.current.style['width'] = '0%';
		setWidth('0%');
		setLabel(labelDefault);

		// classRef.current.className = `${classes.skillbar__progress}`;
		// nameRef.current.innerText = 'hover to check...';
		// event.target.style.background = 'transparent';
		// event.target.style.background = 'blue';
	};

	// beginner,
	// intermediate,
	// proficient,
	// expert,
	// god

	const setLabel = name => {
		if (labelRef.current) {
			labelRef.current.innerText = name;
		}
	};

	const setWidth = width => {
		if (classRef.current) {
			classRef.current.style['width'] = `${width}`;
		}
	};

	return (
		<div className={classes['skillbar-legend']}>
			<div className={classes.skillbar}>
				<div ref={labelRef} className={classes.skillbar__skill}>
					{labelDefault}
				</div>
				<div
					className={classes.skillbar__container}
					onMouseLeave={hoverOutAllHandler}
				>
					<div
						className={classes.skillbar__segment}
						// onMouseOver={() => hoverHandler('beginner')}
						onMouseOver={event => hoverHandler(event, '20%')}
						// onMouseOver={hoverHandler}
					></div>
					<div
						className={classes.skillbar__segment}
						// onMouseOver={() => hoverHandler('intermediate')}
						onMouseOver={event => hoverHandler(event, '40%')}
						// onMouseOver={hoverHandler}
					></div>
					<div
						className={classes.skillbar__segment}
						// onMouseOver={() => hoverHandler('proficient')}
						onMouseOver={event => hoverHandler(event, '60%')}
						// onMouseOver={hoverHandler}
					></div>
					<div
						className={classes.skillbar__segment}
						// onMouseOver={() => hoverHandler('expert')}
						onMouseOver={event => hoverHandler(event, '80%')}
						// onMouseOver={hoverHandler}
					></div>
					<div
						className={classes.skillbar__segment}
						// onMouseOver={() => hoverHandler('god')}
						onMouseOver={event => hoverHandler(event, '100%')}
						// onMouseOver={hoverHandler}
					></div>

					<div
						ref={classRef}
						className={`${classes.skillbar__progress} 
                    
                    `}
					></div>
				</div>
			</div>
		</div>
	);
};

export default SkillbarLegend;
