import styles from "./App.module.scss";
import Clock from "./components/Clock/Clock";
import Header from "./components/Header/Header";
import Mobile from "./components/Mobile/Mobile";
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
    </div>
  );
}

export default App;
