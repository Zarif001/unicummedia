import React from "react";
import styles from "./Service.module.scss";

function Service() {
  const combinedStyles = {
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    background: "linear-gradient(90deg, #fff 2.09%, #fff 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
    <div className={styles.services} id="services">
      <h2 style={combinedStyles} className={styles.title}>
        Наши услуги
      </h2>
      <p className={styles.text}>Скажите ДА стремительному росту продаж</p>
      <p className={styles.spanText}>
        100% прозрачность, никаких оправданий и хитрых приемов. Просто серьезные
        цифровые результаты.
      </p>

      <div className={styles.items}>
        <div className={styles.item}>
          <img src="./images/serviceImg1.webp" alt="serviceImg1" />
          <div>
            <h4 style={combinedStyles}>СММ</h4>
            <p>
              СММ позволяет укрепить узнаваемость и видимость бренда на
              социальных платформах, также помогает привлекать потенциальных
              клиентов и целевую аудиторию к вашему бизнесу. Социальные сети
              предоставляют платформу для общения с клиентами, отвечая на
              вопросы и решая Эффективный СММ может способствовать увеличению
              продаж и прибыли бизнеса.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img src="./images/aboutImg3.webp" alt="aboutImg3" />
          <div>
            <h4 style={combinedStyles}>Работа со сми</h4>
            <p>
              работа с СМИ в СММ важна для усиления видимости бренда,
              установления связей с профессионалами в сфере медиа и эффективного
              управления репутацией бизнеса в онлайн-пространстве.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img src="./images/serviceImg3.webp" alt="serviceImg3" />
          <div>
            <h4 style={combinedStyles}>Video production</h4>
            <p>
              Видеопродакшн в социальных медиа маркетинге (СММ) представляет
              собой создание и публикацию видеоконтента с целью привлечения
              внимания аудитории и достижения маркетинговых целей. Видео
              является мощным инструментом СММ, так как привлекает внимание,
              повышает уровень вовлеченности аудитории и помогает эффективно
              передавать информацию о продуктах или услугах бренда.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img src="./images/serviceImg4.webp" alt="serviceImg4" />
          <div>
            <h4 style={combinedStyles}>atl\btl</h4>
            <p>
              Этот подход включает в себя создание контента, который
              ориентирован на широкую аудиторию и нацелен на массовое
              воздействие. Примерами могут быть креативные видеоролики, вирусные
              мемы и посты, которые призваны привлекать внимание максимального
              числа пользователей. Важно подбирать подход, который соответствует
              целям и аудитории бренда в социальных медиа. Часто успешная
              стратегия включает в себя элементы как ATL, так и BTL, чтобы
              охватить как можно больше потенциальных клиентов и
              взаимодействовать с ними на более глубоком уровне.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <img src="./images/aboutImg.webp" alt="aboutImg" />
          <div>
            <h4 style={combinedStyles}>Контекстная реклама</h4>
            <p>
              Контекстная реклама в СММ помогает брендам достигать своей целевой
              аудитории на социальных платформах, обеспечивая более высокую
              релевантность и, как результат, более успешные маркетинговые
              кампании.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
