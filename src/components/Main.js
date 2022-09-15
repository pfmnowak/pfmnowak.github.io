import React from 'react';
import classes from './Main.module.scss';
import Slider from './Slider/Slider';

const Main = () => {
	return (
		<main>
			<div className={classes['main-container']}>
				<section className={classes['section-about']} id="section-about">
					<h2 className={classes['heading-secondary']}>About</h2>
					<p className={classes.paragraph}>
						Hello world. Get ready for more...
					</p>
				</section>
				<section className={classes['section-projects']} id="section-projects">
					<h2 className={classes['heading-secondary']}>Projects</h2>
					<Slider />
				</section>

				<section className={classes['section-cv']} id="section-cv">
					<img
						className={classes['section-cv__img']}
						src={require('../img/white-desk.jpg')}
						alt="Section background"
					/>
					<div className={classes['section-cv__content']}>
						<header className={classes['header-secondary']}>
							<h2 className={classes['heading-secondary']}>CV</h2>
						</header>
						<section
							className={classes['section-tech-skills']}
							id="section-tech-skills"
						>
							<header className={classes['header-tertiary']}>
								<h2 className={classes['heading-tertiary']}>tech skills</h2>
							</header>

							<div className={classes.skillbox}>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>html</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--expert']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>css</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--expert']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>scss</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--proficient']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>js</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--proficient']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>React</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--intermediate']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>Docker</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--intermediate']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>java</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--proficient']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>BEM</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--expert']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>mySQL</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--proficient']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>git</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--proficient']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>npm</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--proficient']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>Webpack</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--beginner']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>DDD</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--beginner']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>TDD</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--beginner']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>maven</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--intermediate']}`}
										></div>
									</div>
								</div>
								<div className={classes.skillbar}>
									<div className={classes.skillbar__skill}>kafka</div>
									<div className={classes.skillbar__container}>
										<div
											className={`${classes.skillbar__progress} ${classes['skillbar__progress--beginner']}`}
										></div>
									</div>
								</div>
							</div>
						</section>
						<section
							className={classes['section-soft-skills']}
							id="section-soft-skills"
						>
							<header className={classes['header-tertiary']}>
								<h2 className={classes['heading-tertiary']}>soft skills</h2>
							</header>
							<div className={classes.skillbox}>
								<ul className={classes.list}>
									<li className={classes.list__item}>Developing web apps</li>
									<li className={classes.list__item}>
										Building reponsive apps & pages
									</li>
									<li className={classes.list__item}>
										Willingness to learn new skills & technologies
									</li>
									<li className={classes.list__item}>
										Ability to work in a group
									</li>
									<li className={classes.list__item}>
										Working under time pressure
									</li>
									<li className={classes.list__item}>
										Good working knowledge of technology
									</li>
									<li className={classes.list__item}>Open mindset</li>
									<li className={classes.list__item}>
										Experience with business
									</li>
									<li className={classes.list__item}>
										Working in an international environment
									</li>
									<li className={classes.list__item}>
										Maintaining clean workspace
									</li>
									<li className={classes.list__item}>
										Ergonomic and safe work
									</li>
									<li className={classes.list__item}>Good stress management</li>
									<li className={classes.list__item}>
										Ability to self-organize work
									</li>
									<li className={classes.list__item}>Work life balance</li>
									<li className={classes.list__item}>
										Business knowledge and the desire to learn more
									</li>
									<li className={classes.list__item}>
										Good knowledge of Microsoft Office Suite
									</li>
									<li className={classes.list__item}>Self-development</li>
									<li className={classes.list__item}>Problem solving</li>
									<li className={classes.list__item}>
										Written and verbal communication
									</li>
									<li className={classes.list__item}>Detail-oriented</li>
								</ul>
							</div>
						</section>
						<section className={classes['section-certs']} id="section-certs">
							<header className={classes['header-tertiary']}>
								<h2 className={classes['heading-tertiary']}>certs</h2>
							</header>
						</section>
						<section
							className={classes['section-languages']}
							id="section-languages"
						>
							<header className={classes['header-tertiary']}>
								<h2 className={classes['heading-tertiary']}>languages</h2>
							</header>
						</section>
						<section
							className={classes['section-eduaction']}
							id="section-eduaction"
						>
							<header className={classes['header-tertiary']}>
								<h2 className={classes['heading-tertiary']}>education</h2>
							</header>
						</section>
						<section
							className={classes['section-experience']}
							id="section-experience"
						>
							<header className={classes['header-tertiary']}>
								<h2 className={classes['heading-tertiary']}>experience</h2>
							</header>
						</section>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Main;
