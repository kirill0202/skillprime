import React from "react";
import capitalize from "lodash/capitalize";
import * as icons from "assets/icons";
import cn from "classnames";
import styles from "./Icon.module.scss";
import type { IconProps } from "./Icon.types";

const Icon = ({
  name,
  style,
  className,
  wrapperClassName,
  ...rest
}: IconProps) => {
  const IconName = `Icon${capitalize(name)}`;
  const IconSvg = icons[IconName as keyof typeof icons];
  if (IconSvg) {
    return (
      <span
        {...rest}
        className={cn(styles.wrapper, wrapperClassName)}
        style={style}
      >
        <IconSvg className={className} />
      </span>
    );
  }
  return null;
};

export default Icon;
