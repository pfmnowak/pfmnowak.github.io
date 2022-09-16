import React, { useState } from 'react';
import IconSvg from '../UI/IconSvg';
import classes from './ScrollTopButton.module.scss';

const ScrollTopButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<button
			className={classes['scroll-top-btn']}
			onClick={scrollToTop}
			style={{
				opacity: visible ? 1 : 0,
				visibility: visible ? 'visible' : 'hidden',
				marginBottom: visible ? 0 : '-12rem',
			}}
		>
			<IconSvg
				class={classes['scroll-top-btn__arrow']}
				name={'icon-chevron-up'}
			/>
		</button>
	);
};

export default ScrollTopButton;
