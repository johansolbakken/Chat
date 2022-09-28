import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "../../../components/Input";
import { UserApi } from "../../../services/UserService/UserApi";

interface LoginProps {
  gotoSignupClicked: () => void;
}

export const Login = (props: LoginProps) => {
  const navigator = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const api = new UserApi();
    api.login(username, password).then((response) => {
      if (response) {
        const storage = window.sessionStorage;
        storage.setItem("loggedIn", "true");
        navigator("/");
      }
    });
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col border p-14">
        <div>
          <h1 className="text-2xl">Login</h1>
        </div>
        <div className="p-5">
          <p>Username</p>
          <Input onChange={setUsername} />
        </div>
        <div className="p-5">
          <p>Password</p>
          <Input password={true} onChange={setPassword} />
        </div>
        <div className="p-5">
          <button className="border p-2" onClick={handleLogin}>
            Login
          </button>
        </div>
        <div>
          <button onClick={props.gotoSignupClicked}>Signup</button>
        </div>
      </div>
    </div>
  );
};
