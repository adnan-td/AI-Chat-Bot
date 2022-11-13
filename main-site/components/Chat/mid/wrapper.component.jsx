import { useContext, useEffect } from "react";
import styles from "../../../../app/SCSS/style.module.scss";
import { BotContext } from "../../../context/data.context";
import UserMessage from "./user.component";

export default function ChatWrapper() {
  const button = [
    { value: "Confirm" },
    { value: "Deny" },
    { value: "Edit Details" },
    { value: "Edit Pic" },
    { value: "Edit Description" },
    { value: "Edit Title" },
    { value: "Edit Game Code" },
    { value: "Edit Game Link" },
    { value: "Edit Features" },
    { value: "Edit Tags" },
    { value: "Edit Developer" },
    { value: "Login" },
    { value: "Search Scripts" },
    { value: "Edit Scripts" },
  ];
  const { chat: data } = useContext(BotContext);

  useEffect(() => {
    document
      .querySelector("#main-wrapper")
      .scroll(0, document.querySelector("#chatwrap").clientHeight);
    console.log(document.querySelector("#chatwrap").clientHeight);
  }, [data]);

  return (
    <div className={styles["chatwrap"]} id="chatwrap">
      {data.map((item, id) => {
        return <UserMessage from={item.from} text={item.text} time={item.time} key={id} />;
      })}
    </div>
  );
}
