/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "../../../app/SCSS/style.module.scss";

export default function NavbarBot({ site, img }) {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className={styles["mainbox__topdiv"]}>
      <div className={styles["mainbox__topdiv__left"]}>
        <Link href="/">
          <button>
            <img src="/action-button/back-button.svg" alt="loading" />
          </button>
        </Link>
        <img src={img} alt="loading" />
        <div>
          <p>{site}</p>
          <p>Bot</p>
        </div>
      </div>
      <div className={styles["mainbox__topdiv__right"]}>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img src="/action-button/dots.svg" alt="loading" />
        </button>
        {isOpen ? (
          <div className={styles["mainbox__topdiv__right__absolute"]} ref={ref}>
            <button>Search Scripts</button>
            <button>Restart Bot</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
