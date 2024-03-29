import React, { useState } from "react";
import styles from "./Collapse.module.scss";
import { CSSTransition } from "react-transition-group";

type CollapseProps = {
  title: string;
  description: string;
  isCollapseProps?: boolean;
};

const Collapse = ({ title, description, isCollapseProps }: CollapseProps) => {
  const [isCollapse, setIsCollapse] = useState(isCollapseProps);

  const handleCollapse = () => setIsCollapse(!isCollapse);

  return (
    <div className={styles.collapse}>
      <div className={styles.wrapper}>
        <p className={styles.heading}>{title}</p>
        <button onClick={handleCollapse} className={styles.collapseBtn}>
          {isCollapse ? "-" : "+"}
        </button>
      </div>
      <CSSTransition
        in={isCollapse}
        classNames={{
          appear: styles["fade-appear"],
          appearActive: styles["fade-appear-active"],
          enter: styles["fade-enter"],
          enterActive: styles["fade-enter-active"],
          enterDone: styles["fade-enter-done"],
          exit: styles["fade-exit"],
          exitActive: styles["fade-exit-active"],
          exitDone: styles["fade-exit-done"],
        }}
        timeout={500}
        unmountOnExit
      >
        <p className={styles.description}>{description}</p>
      </CSSTransition>
    </div>
  );
};

export default Collapse;
