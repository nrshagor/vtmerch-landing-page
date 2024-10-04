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
            <div className={styles.imageWrapper}>
              <img src="/img/img9.png" alt="Product 1" />
            </div>

            <p>Men&apos;s Black Crewneck</p>
            <div className={styles.prices}>
              <span>$34.99</span>
              <span>$34.99</span>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.imageWrapper}>
              <img src="/img/img10.png" alt="Product 2" />
            </div>

            <p>Men&apos;s Black Hoodie</p>
            <div className={styles.prices}>
              <span>$34.99</span>
              <span>$34.99</span>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.imageWrapper}>
              {" "}
              <img src="/img/img11.jpeg" alt="Product 1" />
            </div>{" "}
            <p>Men&apos;s Black Crewneck</p>
            <div className={styles.prices}>
              <span>$34.99</span>
              <span>$34.99</span>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.imageWrapper}>
              <img src="/img/img12.png" alt="Product 2" />
            </div>{" "}
            <p>Men&apos;s Black Hoodie</p>
            <div className={styles.prices}>
              <span>$34.99</span>
              <span>$34.99</span>
            </div>
          </div>
          <div className={styles.product}>
            <div className={styles.imageWrapper}>
              <img src="/img/img11.jpeg" alt="Product 1" />
            </div>{" "}
            <p>Men&apos;s Black Crewneck</p>
            <div className={styles.prices}>
              <span>$34.99</span>
              <span>$34.99</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
