import { useContext, useRef } from "react";
import styles from "./mc.module.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { BotContext } from "../../context/data.context";
const imghost = "https://files.scripthome.org"

const ImgModal = () => {
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const { chat, setChat, script, setScript } = useContext(BotContext)

  const onClickHandler = () => {
    fileInputRef.current.click();
  };

  const handleClose = () => {
    chat.pop()
    setChat([...chat])
  }

  const onChangeHandler = (event) => {
    if (event.target.files.length !== 1) {
      return;
    }

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    const onChange = async (formData) => {
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      try {
        const response = await axios.post(`${imghost}/request`, formData, config);

        setScript({ ...script, img: `${imghost}/${response.data.img}` });
        toast.success("Image was Successfully Uploaded!");
        handleClose();
      } catch (e) {
        console.log(e);
        toast.error("Sorry something happened! Please make sure file size is under 100 Kb");
      }
    };
    onChange(formData);

    formRef.current.reset();
  };
  return (
    <div className={styles["modal-cover"]}>
      <div className={styles["sign-up-modal"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-div"]} onClick={handleClose}>
          <img src="/x-close.svg" alt="" className={styles["close-icon"]} />
        </button>
        <div className={styles["top-content"]}>
          <div className={styles["header-content"]}>
            <p>Upload a Photograph</p>
            <span>Upload the photograph that you want for your profile.</span>
          </div>

          <form className={styles["upload-div"]} ref={formRef} onClick={onClickHandler}>
            <img src="/upload-icon.svg" alt="" />
            <div className={styles["up-content-div"]}>
              <p className={styles["up-text"]}>
                <button type="button" className={styles["up-action"]}>
                  Click to upload
                </button>{" "}
                or drag and drop
              </p>
              <p>SVG, PNG, JPG or Webp (max. 100 KB)</p>
            </div>
            <input
              multiple={false}
              name="uploadimg"
              onChange={onChangeHandler}
              ref={fileInputRef}
              style={{ display: "none" }}
              type="file"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImgModal;
