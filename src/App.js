import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./Components/Header/Header";

import MainRoutes from "./Routes/MainRoutes";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <MainRoutes />
      <Footer/>
    </>
  );
}

export default App;
