import React from "react";
import styles from "./styles.module.sass";
import { Button } from "../Button/Button";
import classNames from "classnames";

export const Content = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.col1}>
          <h1>
            Зарабатывайте <br />
            больше<br></br>
            <span className={styles.colorText}>с WELBEX</span>
          </h1>
          <h2>Развиваем и контролируем продажи за вас</h2>
        </div>
        <div className={styles.col2}>
          <div className={styles.col2__title}>
            Вместе&nbsp;
            <span className={styles.colorText}>
              c бесплатной <br></br>консультацией{" "}
            </span>
            мы дарим:
          </div>
          <div className={classNames("notOnMobile", styles.presents)}>
            <div className={styles.presents__col1}>
              <div className={styles.presents__title}>Виджеты</div>
              <p className={styles.presents__text}>30 готовых решений</p>
            </div>
            <div className={styles.presents__col2}>
              <div className={styles.presents__title}>Dashboard</div>
              <p className={styles.presents__text}>
                с показателями вашего бизнеса
              </p>
            </div>
            <div className={styles.presents__col3}>
              <div className={styles.presents__title}>Skype Аудит</div>
              <p className={styles.presents__text}>
                отдела продажи CRM системы
              </p>
            </div>
            <div className={styles.presents__col4}>
              <div className={styles.presents__title}>35 дней</div>
              <p className={styles.presents__text}>использования CRM</p>
            </div>
          </div>

          <div className={classNames("notOnDesktop", styles.presents_mob)}>
            <ul>
              <li>Skype аудит</li>
              <li>30 виджетов</li>
              <li>Dashboard</li>
              <li>Месяц аmoCRM</li>
            </ul>
          </div>

          <Button className={classNames("notOnMobile", styles.btn)}>
            Получить консультацию
          </Button>
        </div>
      </div>
      <div className={classNames("notOnDesktop", styles.overlay)}></div>
    </div>
  );
};
