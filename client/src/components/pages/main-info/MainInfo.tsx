import React from "react";
import styles from "./MainInfo.module.scss";
import Heading from "./Heading";
import Сourses from "./Сourses";
import Icon from "ui/Icon";
import Marquee from "ui/Marquee";
import { contentInfo } from "constants/index";
import AdvantageCourses from "./AdvantageCourses";

const MainInfo = () => {
  console.log(
    "%c" +
      "Ура, ты молодец, нашел скидку на курс!Сделай скрин и пришли его нам и получи 10%",
    "color: #f8bc5c; -webkit-text-stroke: 2px black; font-size: 30px; font-weight: bold;"
  );
  return (
    <div className={styles.wrapper}>
      <Heading />
      <div className={styles.infoBlock}>
        <div className={styles.wrapperBlock}>
          <h2 className={styles.heading}>
            Научитесь
            <br /> <span className={styles.work}>работать</span> в{" "}
            <span className={styles.it}>IT</span>
          </h2>
          <Icon name="arrowright" className={styles.arrowRight} />
        </div>
        <p className={styles.desc}>
          Разработка веб-интерфейсов, программируйте и улучшайте IT-навыки.
          Поднимитесь на новые высоты, начав карьеру в сфере IT.
        </p>
      </div>
      <Сourses />
      <div className={styles.marquee}>
        <Marquee content={contentInfo} />
      </div>
      <div className={styles.advantageCourses}>
        <AdvantageCourses />
      </div>
    </div>
  );
};

export default MainInfo;
