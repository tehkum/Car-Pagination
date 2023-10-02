import Header from "./components/header/header";
import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/home/homepage";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/page/:pageNo" element={<Homepage />} />
        <Route path="/*" element={<Navigate to="/page/1" />} />
      </Routes>
      <Footer />
    </div>
  );
}
