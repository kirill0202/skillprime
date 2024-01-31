import React from "react";
import styles from "./CardCourse.module.scss";
import Tilt from "react-parallax-tilt";
import { IconNames } from "ui/Icon/Icon.types";
import Icon from "ui/Icon";

type CardCourseProps = {
  name: string;
  iconName: IconNames;
  backgroundColor?: string;
};

const CardCourse = ({ name, iconName, backgroundColor }: CardCourseProps) => {
  return (
    <Tilt
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      perspective={900}
      scale={1.1}
      transitionSpeed={2000}
    >
      <div className={styles.course} style={{ background: backgroundColor }}>
        <Icon name={iconName} wrapperClassName={styles.courseIcon} />
        <p className={styles.name}>{name}</p>
      </div>
    </Tilt>
  );
};

export default CardCourse;
