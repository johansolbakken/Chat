/**
 * Login Logic
 *
 * This file is responsible for forcing the Router to show login and signup when
 * the user is not logged in.
 */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginLogic = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storage = window.sessionStorage;
    const loggedIn = storage.getItem("loggedIn");
    if (loggedIn !== null) {
      if (loggedIn === "true") {
        navigate("/");
        return;
      }
    }
    navigate("/login");
  }, [navigate]);

  return <div></div>;
};
