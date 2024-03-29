import React from "react";
import cn from "classnames";
import styles from "./CollapseVertical.module.scss";

type CollapseVerticalProps = {
  children: React.ReactNode;
  numberCard: number;
  handleSelectedCourse: (numberCard: number) => void;
  selectedCourse: number;
};

const CollapseVertical = ({
  children,
  numberCard,
  handleSelectedCourse,
  selectedCourse,
}: CollapseVerticalProps) => {
  const isSelectedCourse = selectedCourse === numberCard;
  const isNumberTag = numberCard > 9;
  return (
    <div
      className={cn(styles.collapseVertical, {
        [styles.shortCollapse]: !isSelectedCourse,
      })}
      onClick={() => {
        handleSelectedCourse(numberCard);
        // setIsCollapse(!isCollapse);
      }}
    >
      {isSelectedCourse ? children : null}
      {!isSelectedCourse ? (
        <p className={styles.numberCard}>
          {isNumberTag ? numberCard : `0${numberCard}`}
        </p>
      ) : null}
    </div>
  );
};

export default CollapseVertical;
