import NavbarHome from "./navbar.component";
import styles from "../../../app/SCSS/style.module.scss";
import Tab from "./tab.component";

export default function HomeSec() {
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
    <div
      className={styles["mainbox"]}
      style={{
        height: "100vh",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <NavbarHome />
      {data.map((tabdata) => {
        return <Tab key={data.id} {...tabdata} />;
      })}
    </div>
  );
}
