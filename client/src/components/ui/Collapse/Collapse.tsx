import React, { useState } from "react";
import styles from "./Collapse.module.scss";

type CollapseProps = {
  title: string;
  description: string;
};

const Collapse = ({ title, description }: CollapseProps) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const handleCollapse = () => setIsCollapse(!isCollapse);

  return (
    <div className={styles.collapse}>
      <div className={styles.wrapper}>
        <p className={styles.heading}>{title}</p>
        <button onClick={handleCollapse} className={styles.collapseBtn}>
          {isCollapse ? "-" : "+"}
        </button>
      </div>
      {isCollapse && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default Collapse;
