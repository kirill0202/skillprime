import React from "react";
import videoDeveloper from "assets/video/developer.mp4";
import Container from "ui/Container";
import styles from "./FrontendPage.module.scss";
import Video from "ui/Video";
import TagInfo from "ui/TagInfo";
import Skills from "./Skills";
import CourseProgram from "./CourseProgram";

const FrontendPage = () => {
  const heading = `<> Курс Frontend Developer </>`;
  return (
    <>
      <Video videoSrc={videoDeveloper} heading={heading} />
      <Container className={styles.container}>
        <div className={styles.tagInfo}>
          <TagInfo title="Кто такой Frontend Разработчик?" numberTag={1} />
          <p className={styles.subTitle}>
            Frontend разработчик – это специалист, который занимается созданием
            пользовательского интерфейса веб-приложений. Он отвечает за
            визуальную составляющую сайта или приложения, а также за его
            функциональность и удобство использования. Frontend разработчик
            должен обладать навыками в программировании на языках HTML, CSS и
            JavaScript, а также иметь опыт работы с различными фреймворками и
            библиотеками. Он должен уметь адаптировать интерфейс под различные
            устройства и браузеры, а также следить за современными трендами и
            стандартами веб-разработки. Кроме того, frontend разработчик должен
            обладать коммуникативными навыками, так как он часто работает в
            команде с дизайнерами, бэкенд разработчиками и другими
            специалистами.
          </p>
        </div>
        <Skills />
        <CourseProgram />
      </Container>
    </>
  );
};

export default FrontendPage;
