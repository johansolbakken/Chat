import { useState } from "react";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

export const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <Login gotoSignupClicked={() => setShowLogin(false)} />
      ) : (
        <Signup gotoLoginClicked={() => setShowLogin(true)}/>
      )}
    </div>
  );
};
