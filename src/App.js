import { useEffect } from "react";
import styles from "./App.module.scss";
import About from "./components/About/About";
import Clock from "./components/Clock/Clock";
import Discount from "./components/Discount/Discount";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Mobile from "./components/Mobile/Mobile";
import MoreGoods from "./components/MoreGoods/MoreGoods";
import News from "./components/News/News";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import Slider from "./components/Slider/Slider";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  useEffect(() => {
    const handleAnchorClick = (event) => {
      const offset = 100; // Высота вашего заголовка
      const targetId = event.target.getAttribute("href")?.substring(1);
      if (targetId) {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth",
        });
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) =>
      link.addEventListener("click", handleAnchorClick)
    );

    return () => {
      anchorLinks.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick)
      );
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Slider />
      <Services />
      <Mobile />
      <Clock />
      <Discount />
      <News />
      <Reviews />
      <Subscribe />
      <MoreGoods />
      <About />
      <Footer />
    </div>
  );
}

export default App;
