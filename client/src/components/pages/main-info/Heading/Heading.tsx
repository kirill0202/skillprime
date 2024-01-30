import React from "react";
import styles from "./Heading.module.scss";

const Heading = () => {
  return (
    <div className={styles.heading}>
      Добро пожаловать в Skill<span className={styles.prime}>Prime</span>
    </div>
  );
};

export default Heading;
