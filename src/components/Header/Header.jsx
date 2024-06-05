import styles from "./Header.module.scss";
import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && isOpen) {
        document.body.classList.add(styles.bodyPosition);
      } else {
        document.body.classList.remove(styles.bodyPosition);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <header>
        <div className={styles.logo}>
          <a href="#">
            <img src="images/main-logo.png" alt="Логотип" />
          </a>
        </div>
        <div className={styles["nav-container"]}>
          <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
            <a href="#">ДОМОЙ</a>
            <a href="#">СЕРВИС</a>
            <a href="#">ТЕЛЕФОНЫ</a>
            <a href="#">ЧАСЫ</a>
            <a href="#">СКИДКИ</a>
            <a href="#">БЛОГ</a>
            <div className={styles.icons}>
              <a href="#">
                <img src="images/search-icon.png" alt="Поиск" />
              </a>
              <a href="#">
                <img
                  src="images/user-icon.png"
                  alt="Личный кабинет"
                  className={styles.user_icon}
                />
              </a>
              <a href="#">
                <img
                  src="images/backet.png"
                  alt="Корзина"
                  className={styles.backet}
                />
              </a>
            </div>
          </nav>
        </div>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <span
            className={`${styles.menuIcon} ${
              isOpen
                ? styles.closeIcon1 + " " + styles.bodyPosition
                : styles.first
            }`}
          ></span>
          <span
            className={`${styles.menuIcon} ${
              isOpen ? styles.closeIcon2 : styles.second
            }`}
          ></span>
          <span
            className={`${styles.menuIcon} ${
              isOpen ? styles.closeIcon3 : styles.third
            }`}
          ></span>
        </button>
      </header>
    </>
  );
}
