import React from "react";
import styles from "@/app/style/Header.module.css";
const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/Valuetainment.svg" alt="VTMerch Logo" />
        </div>
        <nav className={styles.nav}>
          <button className={styles.menuButton}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
