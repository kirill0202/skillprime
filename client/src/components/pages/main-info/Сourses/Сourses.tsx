import React from "react";
import TagInfo from "ui/TagInfo";
import styles from "./Сourses.module.scss";
import CardCourse from "ui/CardCourse";
import { useNavigate } from "react-router-dom";

const Сourses = () => {
  const navigate = useNavigate();
  const handleRedrectCourseFrontend = () => navigate("/development");

  return (
    <div className={styles.courses}>
      <div className={styles.courseItem}>
        <TagInfo title="Курсы" numberTag={1} />
        <p className={styles.desc}>
          Вы приобретете все необходимые знания и навыки, чтобы стать
          востребованным специалистом, способным успешно работать в крупных
          проектах вместе с талантливой командой.
        </p>
      </div>
      <CardCourse
        name="Frontend"
        iconName="development"
        onClick={handleRedrectCourseFrontend}
      />
      <CardCourse name="HTML/CSS" backgroundColor="#FF6A3A" iconName="layout" />
    </div>
  );
};

export default Сourses;
