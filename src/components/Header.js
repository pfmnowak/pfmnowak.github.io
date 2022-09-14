import React from "react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__item}>
            <a href="#section-about" className={classes.navigation__link}>
              About
            </a>
          </li>
          <li className={classes.navigation__item}>
            <a href="#section-projects" className={classes.navigation__link}>
              Projects
            </a>
          </li>
          <li className={classes.navigation__item}>
            <a href="#section-cv" className={classes.navigation__link}>
              CV
            </a>
          </li>
          <li className={classes.navigation__item}>
            <a href="#footer" className={classes.navigation__link}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className={classes.header__box}>
        <h1
          className={`${classes["heading-primary"]} ${classes["heading-primary--main"]}`}
        >
          <span className={classes["colorful-text"]}>Hi, I'm</span> Mikołaj
        </h1>
        <h1
          className={`${classes["heading-primary"]} ${classes["heading-primary--sub"]}`}
        >
          junior frontend developer
        </h1>
      </div>
      <div className={classes.header__neon}></div>
    </header>
  );
};

export default Header;
