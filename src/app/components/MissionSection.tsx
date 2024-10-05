import React from "react";
import styles from "@/app/style/MissionSection.module.css";

const MissionSection = () => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionLeftSection}>
        <div className={styles.icon}>
          <img src="/icon/quotes.svg" alt="Patrick Bet-David" />
        </div>
        <p>
          Our mission is to enlighten, entertain and empower current and future
          leaders around the world.
        </p>
      </div>
      <div className={styles.missionRightSection}>
        <div className={styles.image}>
          <img src="/img/mission.png" alt="Patrick Bet-David" />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
