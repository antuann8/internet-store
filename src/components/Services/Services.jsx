import styles from "./Services.module.scss";
import { servicesData } from "./../../constants/services";

export default function Services() {
  return (
    <div className={styles.container}>
      {servicesData.map((item) => (
        <div>
          <img src={item.icon} />
          <h2>{item.name}</h2>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
