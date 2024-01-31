import React from "react";
import styles from "./TagInfo.module.scss";

type TagInfoProps = {
  title: string;
  numberTag: number;
};

const TagInfo = ({ title, numberTag }: TagInfoProps) => {
  const isNumberTag = numberTag > 9;
  return (
    <div className={styles.tagInfo}>
      <div className={styles.numberTag}>
        {isNumberTag ? numberTag : `0${numberTag}`}
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default TagInfo;
