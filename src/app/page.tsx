import HeroSection from "./components/HeroSection";
import PromoSection from "./components/PromoSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <PromoSection />
    </div>
  );
}
