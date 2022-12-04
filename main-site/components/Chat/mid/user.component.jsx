/* eslint-disable @next/next/no-img-element */
import styles from "../../../../app/SCSS/style.module.scss";
import ImgModal from "../../imgUpload/uploader";

export default function UserMessage({ text, time, button, from, imgUp, imgShow }) {
  let styleshell = styles["chatwrap__user"];
  let buttonmod = styles["chatwrap__user__wrapper__button"];

  if (button) {
    buttonmod =
      styles["chatwrap__user__wrapper__button"] +
      " " +
      styles["chatwrap__user__wrapper__button__mod"];
  }

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
    {
      img: "https://scripthome.org/default-avatars/10.jpg",
      site: "Sudhanshu Prasad",
      id: "4",
    },
  ];

  if (from === "bot") {
    var img = data[0].img;
    var site = data[0].site;
    styleshell = styles["chatwrap__user"] + " " + styles["chatwrap__user__mod"];
  } else {
    var img = data[3].img;
    var site = data[3].site;
  }

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  if (imgUp) {
    return (<ImgModal />)
  }

  return (
    <div className={styleshell}>
      <div className={styles["chatwrap__user__wrapper"]}>
        <div className={styles["mainbox__topdiv__left"]}>
          <div
            className={styles["mainbox__topdiv__left__imgmod"]}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div>
            <p>{site}</p>
            <p>{formatAMPM(time)}</p>
          </div>
        </div>
        {
          imgShow ? (
            <div className={styles["chatwrap__user__wrapper__scriptimg"]}>
              <img src={imgShow} alt="loading" />
            </div>
          ) : null
        }
        <pre className={styles["chatwrap__user__wrapper__message"]}>{text}</pre>
      </div>
      <div className={buttonmod}>
        {button?.map((bt, id) => {
          return (
            <button key={id} onClick={bt.handleClick}>
              {bt.value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
