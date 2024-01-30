import React from "react";
import styles from "./Header.module.scss";
import Logo from "common/Logo/Logo";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.lists}>
        <li className={styles.list}>Сервис</li>
        <li className={styles.list}>Абаут</li>
        <li className={styles.list}>Контакты</li>
      </ul>
    </nav>
  );
};

export default Header;
