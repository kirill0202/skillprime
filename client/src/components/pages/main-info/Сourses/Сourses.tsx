import React from "react";
import TagInfo from "ui/TagInfo";
import styles from "./Сourses.module.scss";
import CardCourse from "ui/CardCourse";

const Сourses = () => {
  return (
    <div className={styles.courses}>
      <div className={styles.courseItem}>
        <TagInfo title="Курсы" numberTag={1} />
        <p className={styles.desc}>
          Goose Group is a group of designers & technologists on a mission to
          make Corporate and Startups more capable through state of the art
          digital solutions.
        </p>
      </div>
      <CardCourse name="Frontend" iconName="development" />
      <CardCourse name="HTML/CSS" backgroundColor="#FF6A3A" iconName="layout" />
    </div>
  );
};

export default Сourses;
