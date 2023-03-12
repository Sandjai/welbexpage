import React from "react";
import styles from "./styles.module.sass";
import classNames from "classnames";
export const Button = ({ children, className }) => {
  return <div className={classNames(className, styles.root)}>{children}</div>;
};
