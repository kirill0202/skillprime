import React from "react";
import cn from "classnames";
import styles from "./Burger.module.scss";

type BurgerProps = {
  className?: string;
  onClick?: () => void;
  isShowMenu?: boolean;
};

const Burger = ({ className, onClick, isShowMenu }: BurgerProps) => (
  <div
    className={cn([
      styles.burgerItems,
      className,
      { [styles.close]: isShowMenu },
    ])}
    onClick={onClick}
  >
    <div className={styles.burgerItem}></div>
    <div className={styles.burgerItem}></div>
    <div className={styles.burgerItem}></div>
  </div>
);

export default Burger;
