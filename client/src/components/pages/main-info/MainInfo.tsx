import React from "react";
import styles from "./MainInfo.module.scss";
import Heading from "./Heading";
import Сourses from "./Сourses";
import Icon from "ui/Icon";

const MainInfo = () => {
  console.log(
    "%c" +
      "Ура, ты молодец, нашел скидку на курс!Сделай скрин и пришли его нам и получи 10%",
    "color: #f8bc5c; -webkit-text-stroke: 2px black; font-size: 30px; font-weight: bold;"
  );
  return (
    <>
      <Heading />
      <div className={styles.infoBlock}>
        <h2 className={styles.heading}>
          Научитесь
          <br /> <span className={styles.work}>работать</span> в{" "}
          <span className={styles.it}>
            IT <Icon name="arrowright" className={styles.arrowRight} />
          </span>
        </h2>
        <p className={styles.desc}>
          Разработка веб-интерфейсов, программируйте и улучшайте IT-навыки.
          Поднимитесь на новые высоты, начав карьеру в сфере IT.
        </p>
      </div>
      <Сourses />
    </>
  );
};

export default MainInfo;
