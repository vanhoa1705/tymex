import Home from "@/containers/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const router = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<>Home</>} />
        <Route path="/about" element={<>About</>} />
      </Routes>
    </Router>
  );
};

export default router;
