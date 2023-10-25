import React from "react";
import styles from "./Request.module.scss";
import Submit from "../Submit/Submit";
function Request() {
    const combinedStyles = {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        background: 'linear-gradient(90deg, #fff 2.09%, #fff 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
  return (
    <div className={styles.request}>
      <div className={styles.requestItem}>
        <h3 style={combinedStyles} className={styles.title}>Готовы расти?</h3>
        <p className={styles.text}>Запишитесь на консультацию от нас Это бесплатно!</p>
        <ul className={styles.list}>
          <li className={styles.link}>Значительно повысить узнаваемость</li>
          <li className={styles.link}>Изучить тенденцию рынка</li>
          <li className={styles.link}>Увеличить конверсию </li>
          <li className={styles.link}>Генерация лидов</li>
          <li className={styles.link}>Планирование и распределение </li>
        </ul>
      </div>
        <Submit/>
    </div>
  );
}
export default Request;
