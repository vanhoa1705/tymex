import Home from "@/containers/Home";
import ProductListContainer from "@/layouts/ProductListLayout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const router = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProductListContainer>
              <Home />
            </ProductListContainer>
          }
        />
        <Route path="/home" element={<>Home</>} />
        <Route path="/about" element={<>About</>} />
      </Routes>
    </Router>
  );
};

export default router;
