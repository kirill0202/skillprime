import React, { FC } from "react";
import styles from "./Container.module.scss";
import cn from "classnames";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={cn(styles.container, className)}>{children}</div>
);

export default Container;
