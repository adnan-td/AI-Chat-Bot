/* eslint-disable @next/next/no-img-element */
import { useContext, useRef } from "react";
import styles from "../../../app/SCSS/style.module.scss";
import { BotContext } from "../../context/data.context";

export default function Toolbar() {
  const { message, setMessage, chat, setChat } = useContext(BotContext);
  function handleMessage() {
    setChat([...chat, { from: "user", text: message, time: new Date() }]);
    setMessage("");
  }
  return (
    <div className={styles["mainbox__topdiv"] + " " + styles["mainbox__bottomdiv"]}>
      <div className={styles["mainbox__topdiv__left"]}>
        <button>
          <img src="/action-button/attach.svg" alt="loading" />
        </button>
        <input
          type="text"
          placeholder="Type Message Here"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <div className={styles["mainbox__topdiv__right"]}>
        <button onClick={handleMessage}>
          <img src="/action-button/send.svg" alt="loading" />
        </button>
      </div>
    </div>
  );
}
