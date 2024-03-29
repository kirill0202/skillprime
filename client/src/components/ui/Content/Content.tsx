import React from "react";
import styles from "./Content.module.scss";

type ContentProps = {
  heading: string;
  term: string;
  themes: string[];
  skills: string[];
};

const Content = ({ heading, term, themes, skills }: ContentProps) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.wrapperContent}>
        <p className={styles.title}>Длительность:</p>
        <p className={styles.subTitle}>{term}</p>
      </div>
      <div className={styles.wrapperContent}>
        <p className={styles.title}>Темы которые будут пройдены:</p>
        {themes.map((item, index) => (
          <span key={index} className={styles.subTitle}>
            {item}
            {index < themes.length - 1 ? "," : ""}
          </span>
        ))}
      </div>
      <p className={styles.title}>Что вы изучите:</p>
      <ul className={styles.skills}>
        {skills.map((item) => (
          <li className={styles.skillItem} key={item}>
            - {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
