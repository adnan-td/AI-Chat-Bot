import { useState, createContext, useEffect } from "react";

export const BotContext = createContext({ scripts: null });

export const BotData = ({ children }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      from: "bot",
      text: "Hello, Let's get Started. You can either upload scripts or search scripts here.",
      time: new Date(),
      trigger: 1,
      button: [
        {
          value: "Upload",
          handleClick: () => {
            addUserMessage("/upload");
          },
        },
        {
          value: "Help",
          handleClick: () => {
            addUserMessage("/help");
          },
        },
        {
          value: "Search Scripts",
          handleClick: () => {
            addUserMessage("/search");
          },
        },
      ],
    },
  ]);
  const [refreshScripts, setRefreshScripts] = useState(false);

  const buttons = {
    editButtons: [
      {
        value: "Edit Title",
        handleClick: () => {
          setMessage("1. ");
        },
      },
      {
        value: "Edit Madeby",
        handleClick: () => {
          setMessage("2. ");
        },
      },
      {
        value: "Edit Game Link",
        handleClick: () => {
          setMessage("3. ");
        },
      },
      {
        value: "Edit Game Code",
        handleClick: () => {
          setMessage("4. ");
        },
      },
      {
        value: "Edit Youtube Link",
        handleClick: () => {
          setMessage("5. ");
        },
      },
      {
        value: "Edit Features",
        handleClick: () => {
          setMessage("6. ");
        },
      },
      {
        value: "Edit Tags",
        handleClick: () => {
          setMessage("7. ");
        },
      },
      {
        value: "Edit Script Code",
        handleClick: () => {
          setMessage("8. ");
        },
      },
      {
        value: "Edit Description",
        handleClick: () => {
          setMessage("9. ");
        },
      },
      {
        value: "Uploader user id",
        handleClick: () => {
          setMessage("0. ");
        },
      },
      {
        value: "Upload Image",
        handleClick: () => {
          addBotMessageImgUp();
        },
      },
      {
        value: "View",
        handleClick: () => {
          addUserMessage("/view");
        },
      },
    ],
    help: [
      {
        value: "Upload",
        handleClick: () => {
          addUserMessage("/upload");
        },
      },
      {
        value: "View",
        handleClick: () => {
          addUserMessage("/view");
        },
      },
      {
        value: "Post",
        handleClick: () => {
          addUserMessage("/post");
        },
      },
      {
        value: "Search",
        handleClick: () => {
          addUserMessage("/search");
        },
      },
    ],
  };

  function addBotMessage(text) {
    // setChat([...chat, { from: "bot", text: text, time: new Date(), trigger: chat.length + 1 }]);
    setChat((ch) => [
      ...ch,
      { from: "bot", text: text, time: new Date(), trigger: chat.length + 1 },
    ]);
  }

  function addBotMessageImgUp() {
    setChat([
      ...chat,
      { from: "bot", text: "", time: new Date(), trigger: chat.length + 1, imgup: true },
    ]);
  }

  function addUserMessage(text) {
    // console.log(chat);
    // setChat([...chat, { from: "user", text: text, time: new Date(), trigger: chat.length + 1 }]);
    setChat((ch) => [
      ...ch,
      { from: "user", text: text, time: new Date(), trigger: chat.length + 1 },
    ]);
  }

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

  useEffect(() => {
    messageHandler(chat[chat.length - 1], chat, setChat, script, setScript, buttons);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat]);

  useEffect(() => {
    setScript({
      img: "",
      title: "",
      madeby: "",
      gameLink: "",
      gameCode: "",
      youtubeLink: "",
      features: "",
      tags: "",
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

const messageHandler = async (message, chat, setChat, script, setScript, buttons) => {
  // console.log(message);
  function addmessage(text, img) {
    if (img) {
      setChat([
        ...chat,
        { from: "bot", text: text, time: new Date(), trigger: chat.length + 1, img },
      ]);
    } else {
      setChat([...chat, { from: "bot", text: text, time: new Date(), trigger: chat.length + 1 }]);
    }
  }

  function addMessageWithButtons(text, buttons) {
    setChat([
      ...chat,
      {
        from: "bot",
        text: text,
        time: new Date(),
        trigger: chat.length + 1,
        button: buttons,
      },
    ]);
  }

  if (message.text === "/help") {
    addMessageWithButtons(`Start uploading scripts by using the following commands:`, buttons.help);
  }

  if (message.text === "/upload") {
    addMessageWithButtons(uploadMessage(), buttons.editButtons);
  }

  if (message.text === "/view") {
    addmessage(viewScript(script), script.img);
  }

  if (message.text === "/post") {
    // postData("https://scripthome.org/api/scripts", script);
    postData("http://localhost:3000/api/postCors", script).then((res) => {
      console.log(res);
      if (res.message === "Added successfully") {
        addmessage("Successfully Posted Script");
      } else {
        addmessage("Failed to upload! Please enter proper Script!");
      }
    });

    // setScript({
    //   img: "",
    //   title: "",
    //   madeby: "",
    //   gameLink: "",
    //   gameCode: "",
    //   youtubeLink: "",
    //   features: "",
    //   tags: "",
    //   script_code: "",
    //   description: "",
    //   user_id: "",
    // });
  }

  if (message.text[0] === "1") {
    setScript({ ...script, title: message.text.slice(3) });
    addmessage("Title added!");
  }

  if (message.text[0] === "2") {
    setScript({ ...script, madeby: message.text.slice(3) });
    addmessage("MadeBy added!");
  }

  if (message.text[0] === "3") {
    setScript({ ...script, gameLink: message.text.slice(3) });
    addmessage("Game Link added!");
  }

  if (message.text[0] === "4") {
    setScript({ ...script, gameCode: message.text.slice(3) });
    addmessage("Game Code added!");
  }

  if (message.text[0] === "5") {
    setScript({ ...script, youtubeLink: message.text.slice(3) });
    addmessage("Youtube Link added!");
  }

  if (message.text[0] === "6") {
    setScript({ ...script, features: message.text.slice(3) });
    addmessage("Features added!");
  }

  if (message.text[0] === "7") {
    setScript({ ...script, tags: message.text.slice(3) });
    addmessage("Tags added!");
  }

  if (message.text[0] === "8") {
    setScript({ ...script, script_code: message.text.slice(3) });
    addmessage("Script Code added!");
  }

  if (message.text[0] === "9") {
    setScript({ ...script, description: message.text.slice(3) });
    addmessage("Description added!");
  }

  if (message.text[0] === "0") {
    setScript({ ...script, user_id: message.text.slice(3) });
    addmessage("Uploader user id added!");
  }
};

const uploadMessage = () => {
  return `
    Start Uploading by entering one by one the following:
    1. Title
    2. Madeby
    3. Game Link
    4. Game Code
    5. YoutubeLink
    6. Features
    7. Tags
    8. Script Code
    9. Description
    10. Uploader user id
    11. Image link

    type in the format:
    1. Content
  `;
};

const viewScript = (script) => {
  return `
  Script you have Entered:
  1. Title - ${script.title}
  2. Madeby - ${script.madeby}
  3. Game Link - ${script.gameLink}
  4. Game Code - ${script.gameCode}
  5. YoutubeLink - ${script.youtubeLink}
  6. Features - ${script.features}
  7. Tags - ${script.tags}
  8. Script Code - ${script.script_code}
  9. Description - ${script.description}
  10. Uploader user id - ${script.user_id}
  11. Image link - ${script.img}
`;
};

async function postData(url = "", data = {}) {
  console.log(url, data);
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
    },
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  console.log("responded");
  return response.json(); // parses JSON response into native JavaScript objects
}
