import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
