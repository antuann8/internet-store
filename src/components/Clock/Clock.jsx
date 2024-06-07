import styles from "./Clock.module.scss";
import { clockSlides, dotsIndex } from "./../../constants/clock";
import { useEffect, useState } from "react";

export default function Clock() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    if (index === 0) {
      setCurrentIndex(0);
    } else if (index === 1 && currentIndex !== clockSlides.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>СМАРТ ЧАСЫ</h2>
      <div className={styles.slider}>
        {clockSlides
          .slice(currentIndex, currentIndex + 4)
          .map((slide, index) => (
            <div key={index} className={`${styles.slide}`}>
              <div className={styles.backet}>
                <img className={styles.img} src={slide.img} />
                <button className={styles.button}>
                  <div className={styles.in_container}>
                    <span className={styles.in}>В КОРЗИНУ</span>{" "}
                    <img
                      className={styles.in_image}
                      width="15px"
                      src="images/cart-outline-white.svg"
                    />
                  </div>
                </button>
              </div>
              <div className={styles.price_container}>
                <span className={styles.name}>{slide.name}</span>
                <span className={styles.price}>{slide.price}</span>
              </div>
            </div>
          ))}
      </div>
      <div className={styles.dots}>
        {dotsIndex.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}