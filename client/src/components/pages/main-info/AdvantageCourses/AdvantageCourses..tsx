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
          это уникальное образовательное учреждение, предлагающее курс обучения,
          который позволит вам освоить все необходимые навыки для успешной
          карьеры в сфере разработки программного обеспечения. Наш курс включает
          в себя обучение основам программирования, разработке веб-приложений.
        </p>
      </div>
      <div className={styles.advantageWrapper}>
        {cardIndos.map((item) => (
          <CardInfo {...item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default AdvantageCourses;
