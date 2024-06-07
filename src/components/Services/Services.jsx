import styles from "./Services.module.scss";
import { servicesData } from "./../../constants/services";

export default function Services() {
  return (
    <div className={styles.container}>
      {servicesData.map((item, index) => (
        <div className={styles.services} key={index}>
          <img className={styles.img} src={item.icon} />
          <h2 className={styles.header}>{item.name}</h2>
          <span className={styles.text}>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
