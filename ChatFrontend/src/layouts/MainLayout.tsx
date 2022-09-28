import { Navbar } from "./Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <div className="w-screen h-screen bg-cyan-400">
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
};
