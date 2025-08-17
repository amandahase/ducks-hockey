import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/games" className={styles.button}>Ice is Ready</Link>
      </main>
    </div>
  );
}
