import "./App.css";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Default from "./pages/Default/Default";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="*" element={<Default/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
