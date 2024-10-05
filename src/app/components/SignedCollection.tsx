import React from "react";
import styles from "@/app/style//SignedCollection.module.css";

const SignedCollection = () => {
  return (
    <section className={styles.signedSection}>
      <div>
        <div className={styles.signedSectionLeft}>
          <div className={styles.text}>
            <p>Patrick Bet-David&apos;s </p>
            <h2>Signed Collection</h2>
            <button className={styles.btn}>
              Shop Now
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.9222 6.41089L13.0888 0.577555C12.9317 0.425756 12.7212 0.341761 12.5027 0.343659C12.2842 0.345558 12.0752 0.433199 11.9207 0.587706C11.7662 0.742213 11.6785 0.951223 11.6766 1.16972C11.6747 1.38822 11.7587 1.59872 11.9105 1.75589L16.3213 6.16672H1.66634C1.44533 6.16672 1.23337 6.25452 1.07709 6.4108C0.920805 6.56708 0.833008 6.77904 0.833008 7.00005C0.833008 7.22107 0.920805 7.43303 1.07709 7.58931C1.23337 7.74559 1.44533 7.83339 1.66634 7.83339H16.3213L11.9105 12.2442C11.8309 12.3211 11.7674 12.413 11.7238 12.5147C11.6801 12.6164 11.6571 12.7257 11.6561 12.8364C11.6552 12.947 11.6763 13.0568 11.7182 13.1592C11.7601 13.2616 11.8219 13.3546 11.9002 13.4329C11.9784 13.5111 12.0715 13.573 12.1739 13.6149C12.2763 13.6568 12.386 13.6779 12.4967 13.6769C12.6073 13.676 12.7167 13.653 12.8183 13.6093C12.92 13.5656 13.012 13.5021 13.0888 13.4226L18.9222 7.58922C19.0784 7.43295 19.1662 7.22102 19.1662 7.00005C19.1662 6.77908 19.0784 6.56716 18.9222 6.41089Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <img src="/img/patSignatureWhite.png" alt="Book 1" />
        </div>
      </div>

      <div className={styles.bookFlex}>
        <div className={styles.book}>
          <img src="/img/bookleft.svg" alt="Book 1" />
        </div>
        <div className={styles.book}>
          <img src="/img/bookright.png" alt="Book 2" />
        </div>
      </div>
    </section>
  );
};

export default SignedCollection;
