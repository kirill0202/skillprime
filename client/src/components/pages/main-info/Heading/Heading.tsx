import React from "react";
import styles from "./Heading.module.scss";
import Typewriter from "typewriter-effect";

const Heading = () => {
  return (
    <>
      <p className={styles.heading}>
        Добро пожаловать в
        <span className={styles.prime}>
          <Typewriter
            options={{
              strings: ["SkillPrime"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </p>
    </>
  );
};

export default Heading;
