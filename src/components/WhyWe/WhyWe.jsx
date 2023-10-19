import React from "react";
import styles from "./WhyWe.module.scss";

function WhyWe() {
  const combinedStyles = {
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    background: "linear-gradient(90deg, #fff 2.09%, #fff 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className={styles.whyWe}>
      <h2 className={styles.title} style={combinedStyles} id="about">
        О нас
      </h2>
      <p className={styles.text}>
        За более чем десятилетний опыт работы с сотнями успешных проектов все
        наши услуги ориентированы на достижение одной главной цели: увеличение
        доходов вашего бизнеса.
      </p>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src="./images/aboutImg.png" alt="aboutImg" />
          <div className={styles.caption}>
            <h3 style={combinedStyles}>4 летний опыт</h3>
          </div>
        </div>
        <div className={styles.item}>
          <img src="./images/aboutImg2.png" alt="aboutImg" />
          <div className={styles.caption}>
            <h3 style={combinedStyles}>префессиональная команда</h3>
          </div>
        </div>
        <div className={styles.item}>
          <img src="./images/aboutImg3.png" alt="aboutImg" />
          <div className={styles.caption}>
            <h3 style={combinedStyles}>проект под ключ </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyWe;
