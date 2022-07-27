import React, { useContext, useRef, useState } from "react";
import AuthCtx from "../Contexts/AuthCtx/AuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const authCtx = useContext(AuthCtx);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    authCtx.loginHandler(usernameInput, passwordInput);
  };

  const inputUsernameHandler = () => {
    if (usernameRef.current.value.trim().length < 5) {
      return;
    }
    setUsernameInput(usernameRef.current.value.trim());
  };

  const inputPasswordHandler = () => {
    if (passwordRef.current.value.trim().length < 7) {
      return;
    }
    setPasswordInput(passwordRef.current.value.trim());
  };

  return (
    <div className={styles.body}>
      <h2 className={styles.title}>Please Login First!</h2>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <label htmlFor="username">
          <input
            minLength={5}
            ref={usernameRef}
            onChange={inputUsernameHandler}
            className={styles.input}
            placeholder="Enter Your Username Here"
          />
        </label>
        <label htmlFor="password">
          <input
            minLength={7}
            ref={passwordRef}
            onChange={inputPasswordHandler}
            className={styles.input}
            type="password"
            placeholder="Enter Your password Here"
          />
        </label>
        <button className={styles.button}>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
