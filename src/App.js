import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClientLogin from "./Pages/Login/ClientLogin";
import BusniessLogin from "./Pages/Login/BusinessLogin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Selection from "./Pages/SignUpSelection/Selection";
import CRegister from "./Pages/Registration/ClientRegister";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLogin />} />
        <Route path="/Business" element={<BusniessLogin />} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/ClientR" element={<CRegister />} />
      </Routes>
    </>
  );
}

export default App;
