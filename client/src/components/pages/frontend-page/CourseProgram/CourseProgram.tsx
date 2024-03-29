import React, { useState } from "react";
import CollapseVertical from "ui/CollapseVertical";
import styles from "./CourseProgram.module.scss";
import TagInfo from "ui/TagInfo";
import Content from "ui/Content";
import { DATA_СOURSE } from "./CourseProgram.consts";

const CourseProgram = () => {
  const [selectedCourse, setSelectedCourse] = useState<number>(1);
  const handleSelectedCourse = (numberCard: number) =>
    setSelectedCourse(numberCard);

  return (
    <div className={styles.curseProgram}>
      <TagInfo numberTag={3} title="Программа курса" />
      <div className={styles.wrapperCollapse}>
        {DATA_СOURSE.map((item) => (
          <CollapseVertical
            key={item.numberCard}
            selectedCourse={selectedCourse}
            handleSelectedCourse={handleSelectedCourse}
            numberCard={item.numberCard}
          >
            <Content
              heading={item.heading}
              skills={item.skills}
              term={item.term}
              themes={item.themes}
            />
          </CollapseVertical>
        ))}
      </div>
    </div>
  );
};

export default CourseProgram;
