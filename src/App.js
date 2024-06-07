import styles from "./App.module.scss";
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
    </div>
  );
}

export default App;
