import React from "react";
import styles from "./styles.module.sass";

import Logo from "../../assets/images/logo_welbex.png";
import Telegram from "../../assets/images/telegram.png";
import Whatsup from "../../assets/images/whatsup.png";
import tel from "../../assets/images/phone.png";

import { MenuItems } from "../Menu/MenuItems";
import { Link } from "react-router-dom";
import classNames from "classnames";
import {
  menuItems__header,
  menuItems__header_mobile,
} from "../../constants/fixtures";

export const Header = ({ className }) => {
  return (
    <div className={classNames(className, styles.root)}>
      <div className={classNames("notOnMobile", styles.logoWrap)}>
        <img src={Logo} className={styles.logo} alt="Welbex Logo"></img>
        <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>
      <MenuItems
        className={classNames("notOnMobile", styles.menu)}
        items={menuItems__header}
      />
      <MenuItems
        className={classNames("notOnDesktop", styles.menu_mob)}
        items={menuItems__header_mobile}
      />
      <div className={classNames("notOnMobile", styles.tel)}>
        <Link to="tel:+75555555555">+7 555 555-55-55</Link>
      </div>
      <div className={classNames("notOnMobile", styles.icon)}>
        <Link to="#">
          <img src={Telegram} alt="Telegram icon"></img>
        </Link>
      </div>
      <div className={classNames("notOnMobile", styles.icon)}>
        <Link to="#">
          <img src={tel} alt="tel icon"></img>
        </Link>
      </div>
      <div className={classNames("notOnMobile", styles.icon)}>
        <Link to="#">
          <img src={Whatsup} alt="Whatsup icon"></img>
        </Link>
      </div>
    </div>
  );
};
