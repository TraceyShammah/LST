import styles from './HeroSection.module.css';
import { heroSectionContent } from '../../data/Categories';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>{heroSectionContent.subtitle}</p>
        <h1 className={styles.title}>{heroSectionContent.title}</h1>
        <p className={styles.description}>{heroSectionContent.description}</p>
        <p className={styles.price}>{heroSectionContent.price}</p>
        <button className={styles.cta}>{heroSectionContent.buttonText}</button>
      </div>
    </section>
  );
};

export default HeroSection;
