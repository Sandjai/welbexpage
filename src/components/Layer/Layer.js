import React from "react";
import styles from "./styles.module.sass";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";

export const Layer = ({ children }) => {
  return (
    <>
      <div className={styles.layer}>
        <Header className={styles.header} />
        <div className={styles.maincontent}>{children}</div>
        <Footer className={styles.footer} />
      </div>
      <div className={styles.redBoll}></div>
      <div className={styles.radialBG}></div>
      <div className={styles.redBoll_sm}></div>
    </>
  );
};
