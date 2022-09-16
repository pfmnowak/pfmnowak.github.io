import React from 'react';
import classes from './Listing.module.scss';

const Listing = props => {
	return (
		<ul className={classes.listing}>
			{props.items.map((item, index) => (
				<li key={index} className={classes.listing__item}>
					{item}
				</li>
			))}
		</ul>
	);
};

export default Listing;
