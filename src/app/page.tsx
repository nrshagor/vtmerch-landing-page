import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import PromoSection from "./components/PromoSection";
import SignedCollection from "./components/SignedCollection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <PromoSection />
      <div className="groupSection">
        <SignedCollection />
        <MissionSection />
      </div>
    </div>
  );
}
