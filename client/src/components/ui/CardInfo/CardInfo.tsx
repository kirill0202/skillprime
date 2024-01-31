import React from "react";
import styles from "./CardInfo.module.scss";
import Icon from "ui/Icon";
import { IconNames } from "ui/Icon/Icon.types";

export type CardInfoProps = {
  title: string;
  description: string;
  iconName: IconNames;
  id: number;
  left?: string;
};

const CardInfo = ({ title, description, iconName, left }: CardInfoProps) => {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.wrapper}>
        <div className={styles.blockName}>
          <Icon
            name={iconName}
            style={{ left }}
            wrapperClassName={styles.icon}
          />
          {title}
        </div>
        <div className={styles.blockDec}>{description}</div>
      </div>
    </div>
  );
};

export default CardInfo;
