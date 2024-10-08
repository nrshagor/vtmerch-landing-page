import React from "react";
import styles from "@/app/style/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerSectionTop}>
        <div className={styles.logo}>
          <Image height={100} width={100} src="./ValuetainmentRed.svg" alt="" />
        </div>
        <h3>VTMERCH</h3>
      </div>
      <div className={styles.footerSectionMiddle}>
        <div className={styles.footerSectionMiddleLeft}>
          <h3>
            Subscribe and be the first to receive notifications about our
            upcoming releases and the latest news.{" "}
          </h3>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className={styles.footerSectionMiddleRight}>
          <div className={styles.services}>
            <h2>Customer Services</h2>
            <p>About Us</p>
            <p>Search</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
            <p>Terms of Service</p>
            <p>Refund policy</p>
            <p>Track Order</p>
          </div>
          <div className={styles.products}>
            <h2>Products</h2>
            <p>Featured products</p>
            <p>Bestseller</p>
            <p>Latest product</p>
            <p>All collections</p>
            <p>All products</p>
          </div>
          <div className={styles.contact}>
            <h2>Contact Us</h2>
            <h3>
              Available between 8AM to 8PM. Ready to answer your questions.
            </h3>
            <div className={styles.contactIcon}>
              <Image height={20} width={20} src="/icon/telephone.svg" alt="" />
              <span>013456789</span>
            </div>
            <div className={styles.contactIcon}>
              <Image height={20} width={20} src="/icon/email.svg" alt="" />
              <span>store@valuetainment.com</span>
            </div>
            <div className={styles.socialIcon}>
              <Image height={20} width={20} src="/icon/facebook.svg" alt="" />
              <Image height={20} width={20} src="/icon/twitter.svg" alt="" />
              <Image height={20} width={20} src="/icon/linkedin.svg" alt="" />
              <Image
                height={20}
                width={20}
                src="/icon/instagram-logo.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerSectionBottom}>
        <p>&copy; 2024 Valuetainment Store. All rights reserved.</p>
        <div className={styles.payment}>
          <Image height={30} width={30} src="/icon/visa2.svg" alt="" />
          <Image height={30} width={30} src="/icon/apple-pay1.svg" alt="" />
          <Image height={30} width={30} src="/icon/diners-club1.svg" alt="" />
          <Image height={30} width={30} src="/icon/visa1.svg" alt="" />
          <Image height={30} width={30} src="/icon/amex1.svg" alt="" />
          <Image height={30} width={30} src="/icon/paypal1.svg" alt="" />
          <Image
            height={30}
            width={30}
            src="/icon/american-express.svg"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
