import "./App.css";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Default from "./pages/Default/Default";
import GameDetail from "./pages/GameDetail/GameDetail";

function App() {
  return (
    <BrowserRouter basename="/freetogame-react">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game/:id" element={<GameDetail/>} />
        <Route path="*" element={<Default/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
