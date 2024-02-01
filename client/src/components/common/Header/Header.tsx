import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Logo from "common/Logo/Logo";
import Burger from "ui/Burger";
import PopupMenu from "common/PopupMenu";
import { menu } from "constants/index";
import useParamsWindow from "hooks/useParamsWindow";

const WINDOW_WIDTH = 530;

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleToggleMenu = () => setIsShowMenu(!isShowMenu);
  const { windowSize } = useParamsWindow();

  useEffect(() => {
    if (windowSize.innerWidth >= WINDOW_WIDTH) {
      setIsShowMenu(false);
    }
  }, [windowSize.innerWidth]);

  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <ul className={styles.lists}>
          {menu.map((item) => (
            <li key={item.id} className={styles.list}>
              {item.menu}
            </li>
          ))}
        </ul>
        <Burger
          className={styles.customMenu}
          isShowMenu={isShowMenu}
          onClick={handleToggleMenu}
        />
      </nav>
      {isShowMenu && <PopupMenu />}
    </>
  );
};

export default Header;
