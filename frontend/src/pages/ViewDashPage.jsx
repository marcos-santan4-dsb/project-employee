import { useEffect, useState } from "react";
import styles from "./ViewDashPage.module.css";
import { Header } from "../components/Header";

function ViewDashPage() {
  const [data, setData] = useState([]);
  const [iframeUrl, setIframeUrl] = useState("");
  const endpoint = `${import.meta.env.VITE_API_URL}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${endpoint}dashboards/`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [endpoint]);

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    setIframeUrl(link);
  };

  const closeIframe = () => {
    setIframeUrl("");
  };

  return (
    <>
      <Header />
      <div className={styles["body-view-dash"]}>
        <h1>View Dash</h1>
        {/* <ul>
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            </li>
          ))}
        </ul> */}
        <div className={styles["dashboards-container"]}>
          {data.map((dash) => (
            <button
              key={dash.id}
              href={dash.link}
              onClick={(event) => handleLinkClick(event, dash.link)}
              className={styles["dashboard-link"]}
            >
              <p>{dash.title}</p>
            </button>
          ))}
        </div>
        {iframeUrl && (
          <div className={styles["iframe-container"]}>
            <button className={styles["close-button"]} onClick={closeIframe}>
              ✖
            </button>
            <iframe
              className={styles["dash-container"]}
              title="Dashboard Viewer"
              src={iframeUrl}
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
}

export default ViewDashPage;
