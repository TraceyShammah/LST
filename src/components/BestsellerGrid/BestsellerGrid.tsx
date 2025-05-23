
import styles from "./BestsellerGrid.module.css";
import { bestsellers } from "../../data/Categories"; 

const BestsellerGrid = () => {
  return (
    <section className={styles.bestsellerSection}>
      <div className={styles.header}>
        <p className={styles.subheading}>Featured Products</p>
        <h2 className={styles.heading}>BESTSELLER PRODUCTS</h2>
        <p className={styles.description}>
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className={styles.grid}>
        {bestsellers.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <div className={styles.info}>
              <h3 className={styles.title}>{product.title}</h3>
              <p className={styles.department}>{product.department}</p>
              <p className={styles.price}>
                <span className={styles.oldPrice}>{product.oldPrice}</span>{" "}
                <span className={styles.newPrice}>{product.newPrice}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.loadMore}>LOAD MORE PRODUCTS</button>
      </div>
    </section>
  );
};

export default BestsellerGrid;
