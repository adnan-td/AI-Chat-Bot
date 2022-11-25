import { useContext, useEffect } from "react";
import styles from "../../../../app/SCSS/style.module.scss";
import { BotContext } from "../../../context/data.context";
import UserMessage from "./user.component";

export default function ChatWrapper() {
  const { chat: data } = useContext(BotContext);

  useEffect(() => {
    document
      .querySelector("#main-wrapper")
      .scroll(0, document.querySelector("#chatwrap").clientHeight);
  }, [data]);

  return (
    <div className={styles["chatwrap"]} id="chatwrap">
      {data.map((item, id) => {
        return (
          <UserMessage
            from={item.from}
            text={item.text}
            time={item.time}
            key={id}
            button={item.button}
          />
        );
      })}
    </div>
  );
}
