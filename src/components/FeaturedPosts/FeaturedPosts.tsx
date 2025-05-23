import styles from './FeaturedPosts.module.css';
import { featuredPosts } from '../../data/Categories';

export default function FeaturedPosts() {
  return (
    <section className={styles.featuredPosts}>
      <h4 className={styles.subtitle}>Practice Advice</h4>
      <h2 className={styles.title}>Featured Posts</h2>
      <div className={styles.grid}>
        {featuredPosts.map(post => (
          <div key={post.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <span className={styles.badge}>{post.label}</span>
              <img src={post.image} alt={post.title} className={styles.image} />
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                <span>Google</span>
                <span>· Trending</span>
                <span>· New</span>
              </div>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.description}>{post.description}</p>
              <div className={styles.footer}>
                <span className={styles.dates}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="#23A6F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v5h5m4.004-7.429L17.939 2M6.064 2L3 4.571M12 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16" />
                  </svg>
                  <span>{post.date}</span>
                </span>
                <span className={styles.coments}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#23856D" d="M4 2v18h18v2H2V2zm17 2.086V18.21H6v-6.152l6.59-5.99l2.967 3.461z" strokeWidth="0.5" stroke="#23856D" />
                  </svg>
                  <span>{post.comments}</span>
                </span>
              </div>

              <span className={styles.learnMoreWrapper}>
  <h6 className={styles.learnMore}>Learn More</h6>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path fill="none" stroke="#23A6F0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.95" d="m12 26l10-10L12 6" />
  </svg>
</span>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
