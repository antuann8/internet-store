import styles from "./App.module.scss";
import Clock from "./components/Clock/Clock";
import Discount from "./components/Discount/Discount";
import Header from "./components/Header/Header";
import Mobile from "./components/Mobile/Mobile";
import News from "./components/News/News";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import Slider from "./components/Slider/Slider";

function App() {
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
    </div>
  );
}

export default App;
