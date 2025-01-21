import { useState } from "react";
import axios from "axios";
import styles from "./AddDashPage.module.css";
import { Header } from "../components/Header";

function AddDashPage({ onNewDashAdded }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const endpoint = `${import.meta.env.VITE_API_URL}`;

  const validateLink = (url) => {
    return url.startsWith("https://app.powerbi.com/");
  };

  async function postDash() {
    try {
      const body = { title, link };
      const response = await axios.post(`${endpoint}dashboards/`, body);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSendDash() {
    if (!title.trim() || !link.trim()) {
      setError("Both Title and Link are required!");
      return;
    }
    setError("");

    if (!validateLink(link)) {
      setError("The link must be a valid Power BI URL!");
      return;
    }

    const newDash = await postDash();
    if (newDash) {
      onNewDashAdded(newDash);
      setTitle("");
      setLink("");
    }
  }

  return (
    <>
      <Header />
      <div className={styles["body-add-dash"]}>
        <h1>Add New Dash</h1>
        <div className={styles.label_button}>
          <label className={styles.label}>
            <input
              className={styles.textInput}
              name="textTitle"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label className={styles.label}>
            <input
              className={styles.textInput}
              name="textLink"
              placeholder="Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </label>
          {error && <p className={styles["error-add-dash"]}>{error}</p>}
        </div>
        <button onClick={handleSendDash}>Save Dash</button>
      </div>
    </>
  );
}

export default AddDashPage;
