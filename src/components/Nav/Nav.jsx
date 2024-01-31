import React from "react";
import style from "./Nav.module.scss";
function Nav() {
  return (
    <div className={style.nav} id="main">
      <div>
        <a href="/">
        <img className={style.navImg} src="./images/Logo.webp" alt="logo" />
        </a>
      
      </div>
      <div>
        <ul className={style.navUl}>
          <li>
            <a className={style.navLi} href="#main">
            Главная
            </a>
          </li>
          <li>
            <a className={style.navLi} href="#about">
            О нас 
            </a>
          </li>
          <li>
            <a className={style.navLi} href="#services">
            услуги
            </a>
          </li>
          <li>
            <a className={style.navLi} href="#clients">
            клиенты
            </a>
          </li>
          <li>
            <a className={style.navLi} href="#contacts">
              контакты
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
