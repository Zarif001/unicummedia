import React from "react";
import styles from './CarouselTitle.module.scss'

function CarouselTitle() {
    const combinedStyles = {
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        background: 'linear-gradient(90deg, #fff 2.09%, #fff 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
  return (
    <div id="clients">
      <h3 className={styles.title} style={combinedStyles}>Наши клиенты</h3>
      <h4 className={styles.text}>Счастливые клиенты наших услуг.</h4>
    </div>
  );
}
export default CarouselTitle;
