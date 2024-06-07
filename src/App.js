import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Slider />
    </div>
  );
}

export default App;
