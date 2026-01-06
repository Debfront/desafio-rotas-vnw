import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import "./globalStyle.scss";
import Voluntary from "./pages/voluntary/Voluntary";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voluntary" element={<Voluntary />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;