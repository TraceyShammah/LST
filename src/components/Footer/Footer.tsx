import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <h2 className={styles.logo}>Bandage</h2>
        <div className={styles.socials}>
           <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
        <path fill="#23A6F0" d="M20 12.05a8 8 0 1 0-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 0 1 3-3.14a12 12 0 0 1 1.79.16v2h-1a1.16 1.16 0 0 0-1.3 1.26v1.51h2.22l-.36 2.33h-1.85V20A8 8 0 0 0 20 12.05" stroke-width="0.5" stroke="#fff" />
      </svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
	<path fill="#23A6F0" d="M16 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0" stroke-width="0.5" stroke="#fff" />
	<path fill="#23A6F0" fill-rule="evenodd" d="M12 7.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0" clip-rule="evenodd" stroke-width="0.5" stroke="#fff" />
	<path fill="#23A6F0" fill-rule="evenodd" d="M17.258 2.833a47.7 47.7 0 0 0-10.516 0c-2.012.225-3.637 1.81-3.873 3.832a46 46 0 0 0 0 10.67c.236 2.022 1.86 3.607 3.873 3.832a47.8 47.8 0 0 0 10.516 0c2.012-.225 3.637-1.81 3.873-3.832a46 46 0 0 0 0-10.67c-.236-2.022-1.86-3.607-3.873-3.832m-10.35 1.49a46.2 46.2 0 0 1 10.184 0c1.33.15 2.395 1.199 2.55 2.517a44.4 44.4 0 0 1 0 10.32a2.89 2.89 0 0 1-2.55 2.516a46.2 46.2 0 0 1-10.184 0a2.89 2.89 0 0 1-2.55-2.516a44.4 44.4 0 0 1 0-10.32a2.89 2.89 0 0 1 2.55-2.516" clip-rule="evenodd" stroke-width="0.5" stroke="#fff" />
</svg>
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 32 32">
        <path fill="#23A6F0" d="M31.937 6.093a13.4 13.4 0 0 1-3.765 1.032a6.6 6.6 0 0 0 2.885-3.631a13.7 13.7 0 0 1-4.172 1.579a6.56 6.56 0 0 0-11.178 5.973c-5.453-.255-10.287-2.875-13.52-6.833a6.46 6.46 0 0 0-.891 3.303a6.56 6.56 0 0 0 2.916 5.457a6.5 6.5 0 0 1-2.968-.817v.079a6.57 6.57 0 0 0 5.26 6.437a6.8 6.8 0 0 1-1.724.229c-.421 0-.823-.041-1.224-.115a6.59 6.59 0 0 0 6.14 4.557a13.17 13.17 0 0 1-8.135 2.801a13 13 0 0 1-1.563-.088a18.66 18.66 0 0 0 10.079 2.948c12.067 0 18.661-9.995 18.661-18.651c0-.276 0-.557-.021-.839a13.1 13.1 0 0 0 3.281-3.396z" />
      </svg>
        </div>
      </div>

      <div className={styles.linksGrid}>
        <div className={styles.column}>
          <h4>Company Info</h4>
          <ul>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Legal</h4>
          <ul>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Features</h4>
          <ul>
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Resources</h4>
          <ul>
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Get In Touch</h4>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
          <p className={styles.subscribeText}>Lore imp sum dolor Amit</p>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
