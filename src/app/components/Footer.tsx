import React from "react";
import styles from "@/app/style/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <form className={styles.subscribeForm}>
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </form>
      <p>&copy; 2024 VTMerch. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
