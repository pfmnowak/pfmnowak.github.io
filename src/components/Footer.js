import React from "react";
import classes from "./Footer.module.scss";
import IconSvg from "./IconSvg";

const Footer = () => {
  return (
    <footer className={classes.footer} id="footer">
      <h2 className={classes["heading-secondary"]}>Contact</h2>
      <div className={classes.social}>
        <a
          href="https://www.facebook.com/profile.php?id=100002371834866"
          className={classes.social__link}
          title="Facebook profile"
        >
          <IconSvg name="icon-facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/mikołaj-nowak-621481230"
          className={classes.social__link}
          title="LinkedIn profile"
        >
          <IconSvg name="icon-linkedin2" />
        </a>
        <a
          href="https://github.com/pfmnowak"
          className={classes.social__link}
          title="GitHub Repo"
        >
          <IconSvg name="icon-github" />
        </a>
        <a
          href="https://www.instagram.com/"
          className={`${classes.social__link} ${classes["social__link--inactive"]}`}
        >
          <IconSvg name="icon-instagram" />
        </a>
        <a
          href="https://pl.pinterest.com/pfmnowak/"
          className={classes.social__link}
          title="Pinterest profile"
        >
          <IconSvg name="icon-pinterest2" />
        </a>
        <a
          href="mailto:pfmnowak@gmail.com"
          className={classes.social__link}
          title="Mail me"
        >
          <IconSvg name="icon-mail4" />
        </a>
      </div>
      <div className={classes.footer__info}>
        <p>If you have any questions, please hesitate to contact me.</p>
        <br />
        <p>&copy; 2022 | By Mikołaj Nowak</p>
      </div>
    </footer>
  );
};

export default Footer;
