import React from "react";
import styles from "@/app/style/PromoSection.module.css";
const PromoSection = () => {
  return (
    <section className={styles.promoSection}>
      <h2>Buy 1 Get 1 Free</h2>
      <div className={styles.productGrid}>
        <div className={styles.product}>
          <img src="/hat1.jpg" alt="White Cap" />
          <p>White Cap</p>
          <span>$12.99</span>
        </div>
        <div className={styles.product}>
          <img src="/hat2.jpg" alt="Black Beanie" />
          <p>Black Beanie</p>
          <span>$12.99</span>
        </div>
        {/* Repeat for other products */}
      </div>
    </section>
  );
};

export default PromoSection;
