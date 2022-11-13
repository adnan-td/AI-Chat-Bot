import Link from "next/link";
import styles from "../../../app/SCSS/style.module.scss";

export default function Tab({ img, site }) {
  return (
    <Link href="/chat">
      <div className={styles["tabdiv"]}>
        <div className={styles["tabdiv__left"]}>
          <img src={img} alt="loading" />
          <p>{site}</p>
        </div>
        <img src="/action-button/chevron-right.svg" alt="loading" />
      </div>
    </Link>
  );
}
