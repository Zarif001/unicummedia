import React, { useState } from "react";
import axios from "axios";
import styles from "./Submit.module.scss";

function Submit() {
  const [messageFormData, setMessageFormData] = useState({
    name: "",
    number: "",
    email: "",
    comment: "",
  });

  const [successMessages, setSuccessMessages] = useState(["", ""]);
  const TOKEN = "6600099198:AAGyTwqp7-CMqscwdtXoQC_FvMIXr0TfEP8";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const CHAT_ID = "-4044044095";

  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    if (!messageFormData.name || !messageFormData.email || !messageFormData.number || !messageFormData.comment) {
        setSuccessMessages(['Заполните все обязательные поля', '']);
        return;
      }
    const { name, number, email, comment } = messageFormData;

    const message =
      `<b>Заявка с сайта</b>\n` +
      `<b>Отправитель: </b> ${name}\n` +
      `<b>Номер: </b> ${number}\n` +
      `<b>Почта: </b> ${email}\n` +
      `<b>О проекте: </b> ${comment}\n`;

    try {
      const response = await axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      });

      setMessageFormData({
        name: "",
        number: "",
        email: "",
        comment: "",
      });

      setSuccessMessages(["", "Сообщение успешно отправлено"]);
    } catch (error) {
      console.warn(error);
    }
  };


  return (
    <div className={styles.submit}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Имя"
          value={messageFormData.name}
          onChange={(e) =>
            setMessageFormData({ ...messageFormData, name: e.target.value })
          }
          className={styles.nameInput}
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={messageFormData.email}
          onChange={(e) =>
            setMessageFormData({ ...messageFormData, email: e.target.value })
          }
          className={styles.nameInput}
          required
        />
        <input
          type="number"
          placeholder="телефон"
          value={messageFormData.number}
          onChange={(e) =>
            setMessageFormData({ ...messageFormData, number: e.target.value })
          }
          className={styles.nameInput}
          required
        />
        <input
          type="text"
          placeholder="Расскажите вкратце о вашем проекте"
          value={messageFormData.comment}
          onChange={(e) =>
            setMessageFormData({ ...messageFormData, comment: e.target.value })
          }
          className={styles.nameInput}
          required
         
        />
        <button type="submit" className={styles.button} onClick={handleMessageSubmit}>Send Message</button>
        <p className={successMessages[1] ? styles.alert : successMessages[0] ? styles.error : '' }>{successMessages[1] || successMessages[0]}</p>
      </form>
    </div> 
  );
}

export default Submit;
