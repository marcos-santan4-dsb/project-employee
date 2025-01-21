import { useState } from "react";
import { authenticateUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import styles from "./UserAuthentication.module.css";
import nestleLogo from "../assets/nestle-logo-dissulba-branca.svg";

function UserAuthentication({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await authenticateUser(email, password);
      onLogin(user); // Define o usuário logado no estado principal
      navigate(user.role === "admin" ? "/add-dash" : "/view-dash");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["container-logo"]}>
          <img src={nestleLogo} alt="logo dissulba distribuição azul" />
        </div>
        <div className={styles["container-login"]}>
          <h2>Login - Relatórios</h2>
          <div className={styles["container-login-inputs"]}>
            <label htmlFor="" className={styles["input-user"]}>
              <p>User</p>
              <input
                className={styles.textInput}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="" className={styles["input-password"]}>
              <p>Senha</p>
              <input
                className={styles.textInput}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          {error && <p className={styles["error-message"]}>{error}</p>}
          <button className={styles["button-login"]} onClick={handleLogin}>
            Entrar
          </button>
        </div>
      </div>
    </>
  );
}

export default UserAuthentication;
