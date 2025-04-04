import { Route, Routes } from "react-router";

import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/prog" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
