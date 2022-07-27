import { useEffect, useState } from "react";
import { tokenAuth, UserData } from "../../DummyData/User";
import AuthCtx from "./AuthCtx";

const genereTokenAuth = () => {
  //no logic here, cuz this token not generate by backend
  return "#5,_D.Yg&#xZtZQ";
};

const AuthProvider = (props) => {
  const [isLoggin, setIsLoggin] = useState(false);

  useEffect(() => {
    if (tokenAuth.includes(localStorage.getItem("token"))) {
      setIsLoggin(true);
    }
  }, []);

  const loginHandlers = (username, password) => {
    let wrong = false;
    for (const dataAuth of UserData) {
      if (dataAuth.username === username && dataAuth.password === password) {
        localStorage.setItem("token", genereTokenAuth());
        setIsLoggin(true);
        return;
      } else {
        wrong = true;
      }
    }
    if (wrong) {
      alert("Username atau password yang dimasukan salah");
    }
  };

  const logoutHandlers = () => {
    localStorage.removeItem("token");
    setIsLoggin(false);
  };

  const authProviderValue = {
    userData: isLoggin,
    loginHandler: loginHandlers,
    logoutHandler: logoutHandlers,
  };

  return (
    <AuthCtx.Provider value={authProviderValue}>
      {props.children}
    </AuthCtx.Provider>
  );
};

export default AuthProvider;
