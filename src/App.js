import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClientLogin from "./Pages/Login/ClientLogin";
import BusniessLogin from "./Pages/Login/BusinessLogin";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Selection from "./Pages/SignUpSelection/Selection";
import CRegister from "./Pages/Registration/ClientRegister";
import BRegister from "./Pages/Registration/BusinessRegister";
import Services from "./Pages/Services/Services.js";
import Home from "./Pages/Home/Home";
import Header from './Components/Header/Header';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/s" element={<ClientLogin />} />
        <Route path="/Business" element={<BusniessLogin />} />
        <Route path="/Selection" element={<Selection />} />
        <Route path="/ClientR" element={<CRegister />} />
        <Route path="/BRegister" element={<BRegister />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
