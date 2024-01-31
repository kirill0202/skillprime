import { HTMLProps } from "react";
import * as icons from "assets/icons";

type IconKeys = Lowercase<keyof typeof icons>;

type GenericIconNames<T> = T extends `icon${infer Names}` ? Names : never;
export type IconNames = GenericIconNames<IconKeys>;

export type IconProps = {
  name: IconNames;
  wrapperClassName?: string;
} & HTMLProps<HTMLSpanElement>;
