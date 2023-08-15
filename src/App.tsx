import { Navigate, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu";
import HomePage from "./routes/HomePage";
import DriftPage from "./routes/DriftPage";
import TimeAttackPage from "./routes/TimeAttackPage";
import ForzaPage from "./routes/ForzaPage";

function App() {
  return (
    <>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
