import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./Components/Header/Header";

import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <>
      <Header />
      <MainRoutes />
    </>
  );
}

export default App;
