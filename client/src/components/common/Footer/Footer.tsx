import React from "react";
import Logo from "common/Logo";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
};

export default Footer;
