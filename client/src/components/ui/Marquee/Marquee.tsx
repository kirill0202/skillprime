import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./Marquee.module.scss";

type MarqueeProps = {
  content: string[];
};

const MarqueeCustom = ({ content }: MarqueeProps) => (
  <Marquee className={styles.warqueeBlock}>
    {content.map((item, index) => (
      <div key={index} className={styles.marqueeContent}>
        {item}
      </div>
    ))}
  </Marquee>
);

export default MarqueeCustom;
