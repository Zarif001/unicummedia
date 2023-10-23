import React from "react";
import style from "./Content.module.scss";

function Content() {
  return (
    <div className={style.content}>
      <div className={style.caption}>
        <h1 className={style.title}>
          UNICUM MEDIA <br /> Маркетинговое агенство
        </h1>
        <p className={style.describtion}>
          Превратим ваш бизнес в успешный и узнаваемый бренд
        </p>
      </div>
      <div className={style.phoneButton}>
        <img
          className={style.phoneButtonImg}
          src="./images/button-call.png"
          alt="button-call"
        />
        <div className={style.phoneCall}>
          <a href="tel:+998994999966">
            <img
              className={style.phoneImg}
              src="./images/phone-call.svg"
              alt="phone-call"
            />
          </a>
          <p className={style.phoneP}>сделать звонок</p>
        </div>
      </div>

      <div>
        <p className={style.serviceText}>услуги, которые мы предоставляем:</p>
        <div className={style.socials}>
          <a href="/">
            <img src="./images/telegram.png" alt="telegram" />
          </a>
          <a href="/">
            <img src="./images/instagram.png" alt="instagram" />
          </a>
          <a href="/">
            <img src="./images/facebook.png" alt="facebook" />
          </a>
        </div>
      </div>

      <div className={style.pictureBox}>
        <img
          className={style.img}
          src="./images/person-with-laptop.webp"
          alt="person-with-laptop"
        />
      </div>
    </div>
  );
}
export default Content;
