import React from 'react';
import classes from './Listing.module.scss';

const Listing = props => {
	let listingClass;

	switch (props.type) {
		case 'horizontal':
			listingClass = classes['listing--horizontal'];
			break;
		case 'single':
			// listingClass = classes['listing--single'];
			listingClass = classes['listing--horizontal'];
			break;
		case 'double':
			listingClass = classes['listing--double'];
			break;
		default:
			listingClass = classes['listing--double'];
	}

	return (
		<div className={classes['listing__wrapper']}>
			<ul className={`${classes.listing} ${listingClass}`}>
				{props.items.map((item, index) => (
					<li key={index} className={classes.listing__item}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Listing;
