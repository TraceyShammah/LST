import styles from "./CategoryGrid.module.css";
import { categories } from "../../data/Categories";

const CategoryGrid = () => {
  return (
    <div className={styles.grid}>
   
      <div className={styles.card}>
        <img src={categories[0].image} alt={categories[0].title} className={styles.image} />
        <div className={styles.overlay}>
          <span className={styles.items}>{categories[0].items} Items</span>
          <h3>{categories[0].title}</h3>
          <a href="#">Read More</a>
        </div>
      </div>

    
      <div className={styles.card}>
        <img src={categories[1].image} alt={categories[1].title} className={styles.image} />
        <div className={styles.overlay}>
          <span className={styles.items}>{categories[1].items} Items</span>
          <h3>{categories[1].title}</h3>
          <a href="#">Read More</a>
        </div>
      </div>

      <div className={styles["right-bottom"]}>
        {[categories[2], categories[3]].map((cat) => (
          <div key={cat.id} className={styles.card}>
            <img src={cat.image} alt={cat.title} className={styles.image} />
            <div className={styles.overlay}>
              <span className={styles.items}>{cat.items} Items</span>
              <h3>{cat.title}</h3>
              <a href="#">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
