import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={"/logo.png"} alt="Logo" width={500} height={300} />
      <h1 className={styles.title}>ACME SAW AND SUPPLY</h1>
      <p className={styles.description}>
        Sharpening Services
      </p>
      <div className={styles.grid}>
        <h2>1204 E. Main Street</h2>
        <h2>Stockton, CA 95205</h2>
        <h3>209-948-6735</h3>
        <a href="mailto:acmesaw@acmesaw.net" className="{styles.card}">
          <h3>acmesaw@acmesaw.net</h3>       
        </a>
      </div>

        <h4>Site coming soon</h4>
        
        </main>
  );
}
