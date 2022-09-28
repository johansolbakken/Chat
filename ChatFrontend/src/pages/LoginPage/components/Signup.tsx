import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "../../../components/Input";
import { UserApi } from "../../../services/UserService/UserApi";

interface SignupProps {
  gotoLoginClicked: () => void;
}

export const Signup = (props: SignupProps) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignon = () => {
    let api = new UserApi();
    api.signup(username, password).then((response) => {
      if (response) {
        const storage = window.sessionStorage;
        storage.setItem("loggedIn", "true");
        navigate("/");
      }
    });
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col border p-14">
        <div>
          <h1 className="text-2xl">Sign up</h1>
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
          <button className="border p-2" onClick={handleSignon}>
            Sign in
          </button>
        </div>
        <div>
          <button onClick={props.gotoLoginClicked}>Login</button>
        </div>
      </div>
    </div>
  );
};
