import { useState, createContext, useEffect } from "react";

export const BotContext = createContext({ scripts: null });

export const BotData = ({ children }) => {
  const [script, setScript] = useState({
    img: "",
    title: "",
    madeby: "",
    gameLink: "",
    youtubeLink: "",
    features: "example;example",
    tags: "example;example",
    script_code: "",
    description: "",
    user_id: "",
  });

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { from: "bot", text: "Hello, Let's get Started", time: new Date() },
  ]);
  const [refreshScripts, setRefreshScripts] = useState(false);

  useEffect(() => {
    setScript({
      img: "",
      title: "",
      madeby: "",
      gameLink: "",
      youtubeLink: "",
      features: "example;example",
      tags: "example;example",
      script_code: "",
      description: "",
      user_id: "",
    });
  }, [refreshScripts]);
  const value = {
    refreshScripts,
    setRefreshScripts,
    message,
    setMessage,
    script,
    setScript,
    chat,
    setChat,
  };
  return <BotContext.Provider value={value}>{children}</BotContext.Provider>;
};
