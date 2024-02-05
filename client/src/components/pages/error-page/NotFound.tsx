import React from "react";
import styles from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleRedirectToMainPage = () => navigate("/");

  return (
    <div className={styles.notFound}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading} title="Error 404">
          Error 404
        </h2>
        <p className={styles.output}>
          Извините, но страница, которую вы ищете, может быть удалена,
          переименована или временно недоступна.
        </p>
        <button
          className={styles.buttonBack}
          onClick={handleRedirectToMainPage}
        >
          Вернуться на главную страницу
        </button>
      </div>
    </div>
  );
};

export default NotFound;
