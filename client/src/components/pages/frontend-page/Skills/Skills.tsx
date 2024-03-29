import React from "react";
import styles from "./Skills.module.scss";
import TagInfo from "ui/TagInfo";
import Collapse from "ui/Collapse";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <TagInfo numberTag={2} title="Чему вы научитесь?" />
      <div className={styles.wrapperCollapse}>
        <Collapse
          isCollapseProps={true}
          title="HTML, CSS и Figma"
          description="Изучите навыки разработки веб-сайтов с использованием HTML и CSS. Узнайте, как повысить качество пользовательского опыта и достичь безупречной верстки."
        />
        <Collapse
          isCollapseProps={true}
          title="Профессиональное тестирование веб-сайтов и приложений"
          description="Научитесь не только создавать веб-страницы, но и обнаруживать и исправлять ошибки в функционировании сайтов и приложений. Приобретите навыки автоматизированного и ручного тестирования.
          "
        />
        <Collapse
          isCollapseProps={true}
          title="Изучите JavaScript"
          description="Мощный язык программирования, который позволит вам создавать интерактивные элементы на веб-страницах"
        />
        <Collapse
          isCollapseProps={true}
          title="Разберетесь в основах SEO"
          description="Научитесь оптимизировать веб-страницы для поисковых систем и улучшать их видимость в поисковых результатах."
        />
        <Collapse
          isCollapseProps={true}
          title="Освоите работу с инструментами разработчика"
          description="Научитесь использовать инструменты, которые помогут вам отлаживать и оптимизировать ваш код."
        />
        <Collapse
          isCollapseProps={true}
          title="Продвинутым навыкам веб-разработчика"
          description="Освойте Typescript и Node.js, чтобы стать востребованным разработчиком, способным создавать и поддерживать сложные веб-сайты как на frontend, так и на backend."
        />
      </div>
    </div>
  );
};

export default Skills;
