import { createContext } from "react";

const AuthCtx = createContext({
  userData: false,
  loginHandler: (username, password) => {},
  logoutHandler: () => {},
});

export default AuthCtx;
