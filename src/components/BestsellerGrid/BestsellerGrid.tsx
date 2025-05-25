import { useEffect } from 'react';
import styles from './BestsellerGrid.module.css';
import { useSelector, useDispatch } from 'react-redux';
import  type { RootState, AppDispatch } from '../../redux/store';
import { fetchProducts } from '../../redux/productsSlice';

const BestsellerGrid = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status, page, limit } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (status === 'idle' && products.length === 0) {
      dispatch(fetchProducts({ page, limit }));
    }
  }, [dispatch, status, page, limit, products.length]);

  const loadMore = () => {
    if (status !== 'loading') {
      dispatch(fetchProducts({ page, limit })); 
    }
  };

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
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.thumbnail || ''}
              alt={product.title}
              className={styles.image}
            />
            <div className={styles.info}>
              <h3 className={styles.title}>{product.title}</h3>
              <p className={styles.department}>{product.category}</p>
              <p className={styles.price}>
                <span className={styles.newPrice}>${product.price.toFixed(2)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <button
          onClick={loadMore}
          className={styles.loadMore}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Loading...' : 'LOAD MORE PRODUCTS'}
        </button>
      </div>
    </section>
  );
};

export default BestsellerGrid;
