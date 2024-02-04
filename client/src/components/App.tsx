import React from "react";
import styles from "./App.module.scss";
import Header from "common/Header";
import MainInfo from "pages/main-info";
import Footer from "common/Footer";

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <MainInfo />
      </div>
      <Footer />
    </>
  );
}

export default App;
