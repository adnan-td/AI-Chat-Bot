/* eslint-disable @next/next/no-img-element */
import styles from "../../../app/SCSS/style.module.scss";

export default function NavbarHome() {
  return (
    <div className={styles["mainbox__topdiv"]}>
      <div className={styles["mainbox__topdiv__left"]}>
        <img
          src="https://scripthome.org/default-avatars/10.jpg"
          width="48px"
          style={{ borderRadius: "4px" }}
          alt="loading"
        />
        <div>
          <p>Sudhanshu Prasad</p>
          <p>Uploader</p>
        </div>
      </div>
      <div className={styles["mainbox__topdiv__right"]}>
        <button>
          <img src="/action-button/dots.svg" alt="loading" />
        </button>
      </div>
    </div>
  );
}
