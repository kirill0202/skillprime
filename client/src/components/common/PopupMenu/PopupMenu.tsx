import React from "react";
import styles from "./PopupMenu.module.scss";
import { menu } from "constants/index";

const PopupMenu = () => {
  return (
    <ul className={styles.menuLists}>
      {menu.map((item) => (
        <li className={styles.menuList} key={item.id}>
          {item.menu}
        </li>
      ))}
    </ul>
  );
};

export default PopupMenu;
