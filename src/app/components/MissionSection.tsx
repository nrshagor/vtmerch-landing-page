import React from "react";
import styles from "@/app/style/MissionSection.module.css";

const MissionSection = () => {
  return (
    <section className={styles.missionSection}>
      <h2>Our Mission</h2>
      <p>
        Our mission is to enlighten, entertain, and empower current and future
        leaders around the world.
      </p>
      <div className={styles.image}>
        <img src="/patrick-bet-david.jpg" alt="Patrick Bet-David" />
      </div>
    </section>
  );
};

export default MissionSection;
