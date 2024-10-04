import React from "react";
import styles from "@/app/style/HeroSection.module.css";
const HeroSection = () => {
  return (
    <div>
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>Future Looks Bright!</h1>
        </div>
        <div className={styles.productGrid}>
          <div className={styles.product}>
            <img src="/product1.jpg" alt="Product 1" />
            <p>Men&apos;s Black Crewneck</p>
            <span>$24.99</span>
          </div>
          <div className={styles.product}>
            <img src="/product2.jpg" alt="Product 2" />
            <p>Men&apos;s Black Hoodie</p>
            <span>$34.99</span>
          </div>
          {/* Repeat for other products */}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
