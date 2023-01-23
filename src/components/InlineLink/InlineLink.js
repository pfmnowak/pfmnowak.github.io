import classes from './InlineLink.module.scss';

const InlineLink = ({ link, title, children }) => {
	return (
		<a
			href={link}
			className={classes['inline-link']}
			title={title}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</a>
	);
};

export default InlineLink;
