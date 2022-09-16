import React from 'react';
import classes from './FlexContainer.module.scss';

const FlexContainer = props => {
	return <div className={classes['flex-container']}>{props.children}</div>;
};

export default FlexContainer;
