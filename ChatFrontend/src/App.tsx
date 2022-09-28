import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginLogic } from "./components/LoginLogic/LoginLogic";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";

function App() {
  return (
    <Router>
      <LoginLogic />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
