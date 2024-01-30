import React from "react";
import styles from "./App.module.scss";
import Header from "common/Header";
import MainInfo from "pages/main-info";

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <MainInfo />
      </div>
    </>
  );
}

export default App;
