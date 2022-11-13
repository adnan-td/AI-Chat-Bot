import styles from "../../../app/SCSS/style.module.scss";
import ChatWrapper from "./mid/wrapper.component";
import NavbarBot from "./navbar.component";
import Toolbar from "./toolbar.component";

export default function MainSec() {
  const data = [
    {
      img: "/site-logo/Scripthome.svg",
      site: "Scripthome",
      id: "1",
    },
    {
      img: "/site-logo/Hacoscripts.svg",
      site: "Hacoscripts",
      id: "2",
    },
    {
      img: "/site-logo/Scriptindex.svg",
      site: "Scriptindex",
      id: "3",
    },
  ];
  return (
    <div className={styles["mainbox"]}>
      <NavbarBot site={data[0].site} img={data[0].img} />
      <ChatWrapper />
      <Toolbar />
    </div>
  );
}
