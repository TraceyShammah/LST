import styles from './TestimonialWithGallery.module.css';
import { testimonial, testimonialGallery } from '../../data/Categories';

export default function TestimonialWithGallery() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonial}>
        <h3 className={styles.heading}>What they say about us</h3>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className={styles.avatar}
        />
          <div className={styles.stars}>
  {[...Array(5)].map((_, i) => {
    if (i < 4) {
      return (
        <span key={i} className={styles.filled}>
          ★
        </span>
      );
    } else {
      return (
        <span key={i} className={styles.outlined}>
          ☆
        </span>
      );
    }
  })}
</div>

        <p className={styles.quote}>{testimonial.quote}</p>
        <p className={styles.name}>{testimonial.name}</p>
        <p className={styles.role}>{testimonial.role}</p>
      </div>

      <div className={styles.gallery}>
        {testimonialGallery.map((img, index) => (
          <img
            src={img}
            alt={`Gallery ${index + 1}`}
            key={index}
            className={styles.galleryImg}
          />
        ))}
      </div>
    </section>
  );
}
