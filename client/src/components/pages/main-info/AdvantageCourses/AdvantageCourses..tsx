import React from "react";
import TagInfo from "ui/TagInfo";
import styles from "./AdvantageCourses.module.scss";
import CardInfo from "ui/CardInfo";
import { cardIndos } from "constants/index";

const AdvantageCourses = () => {
  return (
    <>
      <TagInfo title="О нас" numberTag={2} />
      <div className={styles.advantageContent}>
        <p className={styles.advantageText}>
          Skill<span className={styles.prime}>Prime</span>
        </p>
        <p className={styles.advantageContentDesc}>
          Goose Group is more than just an agency: we are a collective of
          designers and technologists united by a joint mission: to enhance the
          efficiency of corporations and startups through modern digital
          solutions, working alongside you from strategy development to
          production and deployment.
        </p>
      </div>
      {cardIndos.map((item) => (
        <CardInfo {...item} key={item.id} />
      ))}
    </>
  );
};

export default AdvantageCourses;
