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
          src="./images/button-call.webp"
          alt="button-call"
        />
        <div className={style.phoneCall}>
          <a href="tel:+998996756666">
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
        <p className={style.serviceText}>Создайте свой Unicum:</p>
        <div className={style.socials}>
          <a href="https://t.me/rieltorDana">
            <img src="./images/telegram.webp" alt="telegram" />
          </a>
          <a href="https://www.instagram.com/unicummedia.uz/">
            <img src="./images/instagram.webp" alt="instagram" />
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
