import React from "react";
import styles from "@/app/style/Header.module.css";
import Image from "next/image";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.image}>
          <Image
            src="/ValuetainmentWhite.svg"
            alt="VTMerch Logo"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.text}>
          <h3>VTMERCH</h3>
        </div>
      </div>
      <nav className={styles.nav}>
        <button className={styles.menuButton}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
