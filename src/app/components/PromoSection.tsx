import React from "react";
import styles from "@/app/style/PromoSection.module.css";
const PromoSection = () => {
  return (
    <section className={styles.promoSection}>
      <div className={styles.title}>
        <h2>Buy 1 get 1 Free</h2>
        <h2>
          on <span>best selling products</span>
        </h2>
      </div>

      <div className={styles.productGrid}>
        <div className={styles.product}>
          <img src="/img/hat1.jpeg" alt="White Cap" />
          <p>Army Green Active Short Sleeve</p>
          <div className={styles.prices}>
            <span>$34.99</span>
            <span>$34.99</span>
          </div>
        </div>
        <div className={styles.product}>
          <img src="/img/hat2.jpeg" alt="Black Beanie" />
          <p>Army Green Active Short Sleeve</p>
          <div className={styles.prices}>
            <span>$34.99</span>
            <span>$34.99</span>
          </div>
        </div>
        <div className={styles.product}>
          <img src="/img/hat3.jpeg" alt="Black Beanie" />
          <p>Army Green Active Short Sleeve</p>
          <div className={styles.prices}>
            <span>$34.99</span>
            <span>$34.99</span>
          </div>
        </div>
        <div className={styles.product}>
          <img src="/img/hat4.jpeg" alt="Black Beanie" />
          <p>Army Green Active Short Sleeve</p>
          <div className={styles.prices}>
            <span>$34.99</span>
            <span>$34.99</span>
          </div>
        </div>
        {/* Repeat for other products */}
      </div>
    </section>
  );
};

export default PromoSection;
