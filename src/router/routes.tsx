import ProductListContainer from "@/containers/ProductListContainer";
import ProductListLayout from "@/layouts/ProductListLayout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const router = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProductListLayout>
              <ProductListContainer />
            </ProductListLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default router;
