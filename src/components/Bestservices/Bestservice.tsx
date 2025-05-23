import styles from './Bestservice.module.css';
import { services } from '../../data/Categories';

export default function Bestservice() {
  return (
    <section className={styles.bestServiceSection}>
      <h3 className={styles.subtitle}>Featured Products</h3>
      <h2 className={styles.title}>THE BEST SERVICES</h2>
      <p className={styles.description}>
        Problems trying to resolve the conflict between
      </p>
      <div className={styles.cardsContainer}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            <img src={service.icon} alt={service.title} className={styles.icon} />
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardText}>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
