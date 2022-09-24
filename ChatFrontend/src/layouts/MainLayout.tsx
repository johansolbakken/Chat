import { Chat } from "../features/Chat";
import { CharList } from "../features/ChatList";
import { Navbar } from "./Navbar";

export const MainLayout = () => {
  return (
    <div className="w-screen h-screen bg-cyan-400">
      <Navbar />
      <div className="h-full flex">
        <CharList />
        <Chat />
      </div>
    </div>
  );
};
