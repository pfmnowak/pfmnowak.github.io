import React, { useRef } from 'react';
import classes from './Skillbar.module.scss';

const levels = [
	{
		label: 'beginner',
		percentage: '25%',
	},
	{
		label: 'intermediate',
		percentage: '50%',
	},
	{
		label: 'proficient',
		percentage: '75%',
	},
	{
		label: 'expert',
		percentage: '100%',
	},
];

const SkillbarLegend = () => {
	const labelRef = useRef();
	const styleRef = useRef(null);
	const tipRef = useRef(null);

	const labelDefault = 'Skill Level';
	const tipDefault = 'Tap/hover to animate';

	const hoverHandler = (label, width) => {
		setLabel(label);
		setWidth(width);
		setTip('Tap/hover out to reset');
	};

	const hoverOutAllHandler = () => {
		setLabel(labelDefault);
		setWidth('0%');
		setTip(tipDefault);
	};

	const setLabel = name => {
		if (labelRef.current) {
			labelRef.current.innerText = name;
		}
	};

	const setTip = name => {
		if (tipRef.current) {
			tipRef.current.innerText = name;
		}
	};

	const setWidth = width => {
		if (styleRef.current) {
			styleRef.current.style['width'] = `${width}`;
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
					{levels.map(level => (
						<div
							key={level.label}
							className={classes.skillbar__segment}
							onMouseOver={() => hoverHandler(level.label, level.percentage)}
						></div>
					))}
					<div
						ref={styleRef}
						className={`${classes.skillbar__progress} 
                    
                    `}
					></div>
				</div>
			</div>
			<p className={classes['skillbar-legend__tip']} ref={tipRef}>
				{tipDefault}
			</p>
		</div>
	);
};

export default SkillbarLegend;
