import React from "react";

import classNames from "classnames";
import styles from "./styles.module.sass";
import { Link } from "react-router-dom";

export const MenuItems = ({ className, items }) => {
  return (
    <div className={classNames(className, styles.root)}>
      {items.map((item) => (
        <Link key={item.id} className={styles.link} to={item.link}>
          {item.text}
        </Link>
      ))}
    </div>
  );
};
