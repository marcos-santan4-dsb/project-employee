import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import nestleLogo from "../assets/nestle-dissulba-logo.svg";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={nestleLogo} alt="logo dissulba distribuição azul" />
        <nav>
          <Link to="/">Add Dash</Link> | <Link to="/view">View Dash</Link>
        </nav>
      </header>
    </>
  );
}
