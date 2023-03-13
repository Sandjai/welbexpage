import React from "react";
import styles from "./styles.module.sass";
import { menuItems__footer, aboutItems } from "../../constants/fixtures";
import { Link } from "react-router-dom";
import Telegram from "../../assets/images/telegram.png";
import Whatsup from "../../assets/images/whatsup.png";
import tel from "../../assets/images/phone.png";
import { MenuItems } from "../Menu/MenuItems";
import classNames from "classnames";

const Footer = ({ className }) => {
  return (
    <div className={classNames(className, styles.footer)}>
      <div className={styles.col1}>
        <div className={styles.title}>О компании</div>
        <MenuItems className={styles.about} items={aboutItems} />
      </div>
      <div className={styles.col2}>
        <div className={styles.title}>Меню</div>
        <MenuItems className={styles.menu} items={menuItems__footer} />
      </div>
      <div className={styles.col3}>
        <div className={styles.title}>Контакты</div>
        <div className={styles.tel}>
          <Link to="tel:+75555555555">+7 555 555-55-55</Link>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <Link to="#">
              <img src={Telegram} alt="Telegram icon"></img>
            </Link>
          </div>
          <div className={styles.icon}>
            <Link to="#">
              <img src={tel} alt="tel icon"></img>
            </Link>
          </div>
          <div className={styles.icon}>
            <Link to="#">
              <img src={Whatsup} alt="Whatsup icon"></img>
            </Link>
          </div>
        </div>
        <div className={styles.address}>Москва, Путевой проезд 3с1, к 902</div>
        <div className={styles.copyright}>
          ©WELBEX 2022. Все права защищены.
        </div>
        <div className={styles.privacy}>
          <Link to="#">Политика конфиденциальности</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
