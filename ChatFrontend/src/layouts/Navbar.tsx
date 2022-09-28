import { useNavigate } from "react-router";
import { Button } from "../components/Button";

export const Navbar = () => {
  const navigator = useNavigate();
  return (
    <nav className="w-screen p-5 bg-white shadow flex items-center justify-between">
      <div className="inline">
        <span className="text-2xl font-sans cursor-pointer">
          <img
            className="h-10 inline mr-2"
            src="https://cdn-icons-png.flaticon.com/512/1380/1380370.png"
            alt=""
          />
          Chat
        </span>
      </div>
      <Button
        text={"Log out"}
        onClick={() => {
          const storage = window.sessionStorage;
          storage.setItem("loggedIn", "false");
          navigator('/login');
        }}
      />
      <div className="inline">
        <span className="text-sm cursor-pointer hover:text-cyan-500 duration-500">
          <img
            className="h-10 rounded-full inline mr-2 border"
            src="https://i1.sndcdn.com/avatars-000692855171-26dt09-t500x500.jpg"
            alt=""
          />
          Johan Solbakken
        </span>
      </div>
    </nav>
  );
};
