import React from "react";
import styles from "./Social.module.scss";
function Social() {
    const combinedStyles = {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        background: 'linear-gradient(90deg, #fff 2.09%, #fff     100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
  return (
    <div className={styles.social} id="contacts">
      <div className={styles.box}>
        <img src="./images/Logo.webp" alt="logo" />
        <h4>
          Агенство цифрового маркетинга <br /> полного цикла
        </h4>
      </div>
      <div className={styles.items}>

      <div className={styles.item}>
        <h4 style={combinedStyles}>Ссылки</h4>
        <ul>
          <li>
            <a href="#main">Главная</a>
          </li>
          <li>
            <a href="#about">О нас</a>
          </li>
          <li>
            <a href="#services">Услугы</a>
          </li>
          <li>
            <a href="#clients">Клиенты</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </div>
      <div className={styles.item}>
        <h4 style={combinedStyles}>Контакты</h4>
        <ul>
          <li>
            <a href="tel:+998994999966">+998994999966</a>
          </li>
          <li>
            <a href="/">unicummedia@gmail.com</a>
          </li>
        </ul>
      </div>
      <div className={styles.item}>
        <h4 style={combinedStyles}>Адрес</h4>
        <p> Юнусабад 6 ориентир дом 46. ресторан adana kebab</p>
      </div>
    </div>

    <div className={styles.pictures}>
        <img src="./images/01instagram.webp" alt="instagram" />
        <img src="./images/01facebook.webp" alt="facebook" />
        <img src="./images/01telegram.webp" alt="telegram" />
    </div>
    </div>
  );
}

export default Social;
