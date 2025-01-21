import styles from "./UserAuthentication.module.css";
import nestleLogo from "../assets/nestle-logo-dissulba-branca.svg";

function UserAuthentication() {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["container-logo"]}>
          <img src={nestleLogo} alt="logo dissulba distribuição azul" />
        </div>
        <div className={styles["container-login"]}>
          <h2>Login</h2>
          <div className={styles["container-login-inputs"]}>
            <label htmlFor="" className={styles["input-user"]}>
              <p>CPF</p>
              <input className={styles["textInput"]} type="text" />
            </label>
            <label htmlFor="" className={styles["input-password"]}>
              <p>Senha</p>
              <input
                className={styles["textInput"]}
                type="password"
                name=""
                id=""
              />
            </label>
          </div>
          <a href="http://">Esqueceu a senha??</a>
          <button className={styles["button-login"]}>Entrar</button>
        </div>
      </div>
    </>
  );
}

export default UserAuthentication;
