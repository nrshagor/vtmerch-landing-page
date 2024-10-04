import React from "react";
import styles from "@/app/style//SignedCollection.module.css";

const SignedCollection = () => {
  return (
    <section className={styles.signedSection}>
      <h2>Patrick Bet-David&apos;s Signed Collection</h2>
      <div className={styles.bookGrid}>
        <div className={styles.book}>
          <img src="/book1.jpg" alt="Book 1" />
          <p>Choose Your Enemies Wisely</p>
        </div>
        <div className={styles.book}>
          <img src="/book2.jpg" alt="Book 2" />
          <p>Your Next Five Moves</p>
        </div>
      </div>
    </section>
  );
};

export default SignedCollection;
