import { Chat } from "../../features/Chat";
import { CharList } from "../../features/ChatList";
import { MainLayout } from "../../layouts/MainLayout";

export const MainPage = () => {
  return (
    <div>
      <MainLayout>
        <div className="h-full flex">
          <CharList />
          <Chat />
        </div>
      </MainLayout>
    </div>
  );
};
