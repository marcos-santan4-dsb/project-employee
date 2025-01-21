import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import nestleLogo from "../assets/nestle-dissulba-logo.svg";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={nestleLogo} alt="logo dissulba distribuição azul" />
        <nav>
          <Link className={styles["link"]} to="/add-dash">
            Add Dash
          </Link>
          |
          <Link className={styles["link"]} to="/view-dash">
            View Dash
          </Link>
        </nav>
      </header>
    </>
  );
}
